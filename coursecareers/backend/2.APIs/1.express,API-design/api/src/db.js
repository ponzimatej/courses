import Database from "better-sqlite3";

const db = new Database("favorites.db");

const createTable = `
    CREATE TABLE IF NOT EXISTS favorites (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        url TEXT NOT NULL
    )
`;

db.exec(createTable);

const favorites = [
  { id: 1, name: "google", url: "https://google.com" },
  { id: 2, name: "twitter", url: "https://x.com" },
  { id: 3, name: "youtube", url: "https://youtube.com" },
];

const instertData = db.prepare(
  "INSERT INTO favorites (name, url) values (?, ?)"
);

favorites.forEach((fav) => {
  instertData.run(fav.name, fav.url);
});

db.close();
