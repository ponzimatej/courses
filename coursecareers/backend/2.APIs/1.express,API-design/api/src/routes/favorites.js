import express from "express";
import Database from "better-sqlite3";

// create our app
const router = express.Router();
const db = new Database("favorites.db");

router.use((req, res, next) => {
  // console.log("Favorites hit");
  next();
});

// get json data - ("/" is http://localhost:3000/favorites)
router.get("/", (request, response) => {
  let query = "SELECT * FROM favorites";

  // if there is a sort query in the request, sort it
  const sort = request.query.sort;
  if (sort === "asc") {
    query += " ORDER BY name ASC";
  }
  if (sort === "desc") {
    query += " ORDER BY name DESC";
  }

  const favorites = db.prepare(query).all();

  response.json({ favorites });
});

// get data from <id>
router.get("/:id", (req, res, next) => {
  try {
    const id = parseInt(req.params.id); // get the ID from /:id

    const favorite = db.prepare("SELECT * FROM favorites WHERE id = ?").get(id);
    // don't append data directly from a user => dont do 'SELECT * FROM favorites WHERE id =' + id

    if (!favorite) {
      return res.status(404).json({ error: "Favorite not found." });
    }

    res.json({ favorite });
  } catch (err) {
    next(err);
  }
});

// create json data
router.post("/", (req, res, next) => {
  try {
    const { name, url } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Name required" });
    }

    if (!url) {
      return res.status(400).json({ error: "URL required" });
    }

    const result = db
      .prepare("INSERT INTO favorites (name, url) VALUES (?, ?)")
      .run(name, url);
    res.status(201).json({ id: result.lastInsertRowid }); // 201 is when you create something, you return the ID of the new item
  } catch (err) {
    next(err);
  }
});

// delete data by <id>
router.delete("/:id", (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const result = db.prepare("DELETE FROM favorites WHERE id = ?").run(id);

    if (!result.changes) {
      return res.status(404).json({ error: "Favorite not found." });
    }

    return res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

// update data with put
router.put("/:id", (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const { name, url } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Name required" });
    }

    if (!url) {
      return res.status(400).json({ error: "URL required" });
    }

    const result = db
      .prepare("UPDATE favorites SET name=?, url=? WHERE id=?")
      .run(name, url, id);

    if (!result.changes) {
      return res.status(404).json({ error: "Favorite not found." });
    }

    return res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

// update data with patch
router.patch("/:id", (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const { name, url } = req.body;

    if (!name && !url) {
      return res.status(400).json({ error: "Name or URL required." });
    }

    // not great because we go to the db twice, this can lead to inconsistencies when multiple users update the same data at once
    // const favorite = db.prepare("SELECT * FROM favorites WHERE id = ?").get(id);
    // if (!favorite) {
    //   return res.status(404).json({ error: "Favorite not found." });
    // }
    // const newName = name || favorite.name;
    // const newUrl = url || favorite.url;

    const result = db
      .prepare(
        "UPDATE favorites SET name=COALESCE(?, name), url=COALESCE(?, url) WHERE id=?"
        // COALESCE updates the values that are not null => update the value if provided, if not provided, keep the old value
      )
      .run(name, url, id);

    if (!result.changes) {
      return res.status(404).json({ error: "Favorite not found." });
    }

    return res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

export default router;
