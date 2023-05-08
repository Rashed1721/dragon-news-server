const express = require("express");
var cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./Data/catagories.json");

app.get("/", (req, res) => {
  res.send("news api running");
});

app.get("/news-catagories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log("Dragon news server running on port", port);
});
