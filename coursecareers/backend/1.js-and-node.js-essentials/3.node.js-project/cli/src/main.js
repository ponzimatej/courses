#!/usr/bin/env node
import open, { apps } from "open";
import dotenv from "dotenv"; // to read '.env'
import Database from "better-sqlite3";
import fs from "fs";
dotenv.config(); // use '.env' for env variables

// You run this code with npm run start, anything you say after npm run start gets put into the process.argv array.
const args = process.argv.slice(2); // e.g: npm run start open youtube => slice(2) = [open, youtube]
const command = args[0];
const favorite = args[1];
const url = args[2];

const dbPath =
  "/Users/matejbednar/Desktop/coding/courses/coursecareers/backend/1.js-and-node.js-essentials/3.node.js-project/client/favorites.db";
let db;

if (!fs.existsSync(dbPath)) {
  // if database doesnt exist, initialize it, else use it
  init();
} else {
  db = new Database(dbPath);
}

const noCommand = !command;
const noFavorite = command !== "ls" && !favorite;
const noURL = command === "add" && !url;
const help = command === "help";

if (noCommand || noFavorite || noURL || help) {
  displayMenu();
  process.exit(1);
}

switch (command) {
  case "open":
    openFavorite(favorite);
    break;
  case "add":
    add(favorite, url);
    break;
  case "rm":
    rm(favorite);
    break;
  case "ls":
    ls();
    break;
  default:
    displayMenu();
    break;
}

function init() {
  console.log("initializing database...");
  db = new Database(dbPath);

  const createTable = `
    CREATE TABLE IF NOT EXISTS favorites (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      url TEXT NOT NULL
    )
  `;
  db.exec(createTable);

  const data = [
    { name: "google", url: "https://google.com" },
    { name: "social", url: "https://instagram.com" },
    { name: "youtube", url: "htpps://youtube.com" },
  ];

  const insertData = db.prepare(
    "INSERT INTO favorites (name, url) VALUES (?, ?)"
  );

  data.forEach((favorite) => {
    insertData.run(favorite.name, favorite.url);
  });
}

function displayMenu() {
  console.log("ls                     : List all favorites");
  console.log("open <favorite>        : Open a saved favorite");
  console.log("add <favorite> <url>   : Add a new favorite for a given URL");
  console.log("rm <favorite>          : Remove a saved favorite");
}

function openFavorite(favorite) {
  const row = db
    .prepare("SELECT * FROM FAVORITES WHERE name = ?")
    .get(favorite);

  if (!row) {
    // if row is not in the table
    console.log("Favorite does not exist.");
    process.exit(1); // exits process, returns code '1'. '1' usually means something went wrong
  }

  const url = row.url;

  let browserName = checkBrowser();
  console.log("opening", url, "with", browserName);

  if (!browserName) {
    open(url); // WITHOUT OPEN - in /src/browser.js
  } else {
    open(url, { app: { name: browserName } });
  }
}

function checkBrowser() {
  const browser = process.env.BROWSER; // browser = env variable BROWSER

  let browserName;
  switch (browser) {
    case "chrome":
      browserName = apps.chrome;
      break;
    case "firefox":
      browserName = apps.firefox;
      break;
    case "edge":
      appName = apps.edge;
      break;
    default:
      browserName = browser;
  }
  return browserName;
}

function add(favorite, url) {
  db.prepare("INSERT INTO favorites (name, url) VALUES (?, ?)").run(
    favorite,
    url
  );
  console.log("adding", favorite, url);
}

function rm(favorite) {
  db.prepare("DELETE FROM favorites WHERE name = ?").run(favorite);
  console.log("removing", favorite);
}

function ls() {
  const favorites = db.prepare("SELECT * FROM favorites").all();
  console.log("All favorites:");
  favorites.forEach((favorite) => {
    console.log(favorite);
  });
}
