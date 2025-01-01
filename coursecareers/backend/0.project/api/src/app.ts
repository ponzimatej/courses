import express from "express";
import Database from "better-sqlite3";
import favorites from "./routes/favorites.js";
import cors from "cors";
import { Request, Response, NextFunction } from "express";

const db = new Database("favorites.db");

// create our app
const app = express();
const port = 3000;
app.use(express.json()); // make the app be able to receive json in the body
app.use(
  cors({
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Accept"],
  })
);

app.use("/favorites", favorites); // use the '/favorites' calls in /routes/favorites.js

app.use((err: any, req: Request, res: Response, next: NextFunction): void => {
  console.log(err);
});

// start our app
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
