const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/home", (request, response) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/works", (request, response) => {
  response.sendFile(__dirname + "/views/works.html");
});

app.get("/photogallery", (request, response) => {
  response.sendFile(__dirname + "/views/photogallery.html");
});

app.listen(3000, () => console.log("Server running on port 3000"));
