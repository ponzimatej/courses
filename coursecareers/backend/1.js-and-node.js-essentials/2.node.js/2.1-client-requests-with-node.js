// First run the server from 2-node-web-server.js
const http = require("http");

http.get("http://localhost:3000", (response) => {
  console.log("Status Code", response.statusCode);

  response.on("data", (chunk) => {
    const data = JSON.parse(chunk.toString());

    data.users.forEach((user) => {
      console.log("User info", user.name);
    });
  });
});
