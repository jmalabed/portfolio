// DEPENDENCIES
const express = require("express");
const app = express();
const PORT = 3000;

const mongoose = require("mongoose");
const methodOverride = require("method-override");

// index route
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.use(express.static(__dirname + "/postcss"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Listen Route
app.listen(PORT, () => {
  console.log("listening on PORT", PORT);
});
