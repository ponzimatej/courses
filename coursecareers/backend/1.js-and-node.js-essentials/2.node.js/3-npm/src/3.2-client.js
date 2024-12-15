const http = require("http");

http.get("http://localhost:3000", (response) => {
  console.log("Status Code", response.statusCode);

  response.on("data", (data) => {
    console.log(data.toString());
  });
});
