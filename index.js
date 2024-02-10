const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = require("./db.json"); // Importing the JSON data directly
const port = process.env.PORT || 8080; // Choose port from here like 8080, 3001

app.use(bodyParser.json()); // Use body-parser to parse JSON requests

// Endpoint to serve the JSON data
app.get("/posts", (req, res) => {
  res.json(router);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// const jsonServer = require("json-server"); // importing json-server library
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

// server.use(middlewares);
// server.use(router);

// server.listen(port);
