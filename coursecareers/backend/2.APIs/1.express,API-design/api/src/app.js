import express from "express";
import Database from "better-sqlite3";

// create our app
const app = express();
const port = 3000;

const db = new Database("favorites.db");

// start our app
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

// get json data - ("/favorites" is http://localhost:3000/favorites)
app.get("/favorites", (request, response) => {
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

app.get("/favorites/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id); // get the ID from /:id

    const favorite = db.prepare("SELECT * FROM favorites WHERE id = ?").get(id);
    // don't append data directly from a user => dont do 'SELECT * FROM favorites WHERE id =' + id

    if (!favorite) {
      return res.status(404).json({ error: "Favorite not found." });
    }

    res.json({ favorite });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong." });
  }
});
