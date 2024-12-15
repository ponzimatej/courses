const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1"; // == localhost
const port = 3000; // full address either: http://localhost:3000 or http://127.0.0.1:3000

const server = http.createServer((request, response) => {
  // sending JSON
  try {
    const data = fs.readFileSync("2.2-users.json", "utf8");
    console.log(data);
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/json");
    response.end(data);
  } catch (err) {
    console.log("error", err.message);
    response.statusCode = 500;
    response.end();
  }

  // // sending HTML
  // response.statusCode = 200;
  // response.setHeader("Content-Type", "text/html");
  // response.end(`
  //     <html>
  //     <head>
  //       <title>User Data</title>
  //     </head>
  //     <body>
  //       <h1>Users</h1>
  //       <p>Matej</p>
  //       <p>Ne Matej</p>
  //     </body>
  //     <html>
  //     `);
});

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}`);
});
