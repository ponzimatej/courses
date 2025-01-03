const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end("Hello world");
});

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}`);
});
