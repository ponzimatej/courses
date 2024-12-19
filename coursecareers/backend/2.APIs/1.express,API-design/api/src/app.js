import express from "express";
import Database from "better-sqlite3";
import favorites from "./routes/favorites.js";

const db = new Database("favorites.db");

// create our app
const app = express();
const port = 3000;
app.use(express.json()); // make the app be able to receive json in the body

app.use("/favorites", favorites); // use the '/favorites' calls in /routes/favorites.js

app.use((err, req, res, next) => {
  console.log(err);
});

// start our app
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
