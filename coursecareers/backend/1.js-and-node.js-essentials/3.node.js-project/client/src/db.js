import Database from "better-sqlite3";
const db = new Database("favorites.db"); // create or use favorites.db in current dir

const createTable = `
    CREATE TABLE IF NOT EXISTS favorites (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        url TEXT NOT NULL
    )
`;
db.exec(createTable); // CREATING A TABLE

// REMOVING A TABLE
// db.exec("DROP TABLE IF EXISTS favorites");

// INSERTING DATA
const insertDataQuery = db.prepare(
  "INSERT INTO favorites (name, url) VALUES (?, ?)"
);

insertDataQuery.run("google", "https://google.com"); // inserting one thing

const data = [
  { name: "social", url: "https://instagram.com" },
  { name: "youtube", url: "https://youtube.com" },
];

data.forEach((favorite) => {
  // inserting multiple things
  insertDataQuery.run(favorite.name, favorite.url);
});

// GETTING DATA
console.log(db.prepare("SELECT * FROM favorites").all()); // getting the whole database
console.log(db.prepare("SELECT * FROM favorites WHERE name = ?").get("social")); // getting the line where name == 'social'
console.log(
  db.prepare("SELECT * FROM favorites WHERE name = ?").get("social").url
); // getting the url from line where name == 'social'

// REMOVING DATA
db.prepare("DELETE FROM favorites WHERE id = ?").run(2); // remove the item with id = 2
db.prepare("DELETE FROM favorites").run(); // removes all data

// GETTING TABLE?
// const queryTables = "SELECT name FROM sqlite_master WHERE type='table'";
// const tables = db.prepare(queryTables).all();
// console.log(tables);
