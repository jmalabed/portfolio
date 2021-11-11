// DEPENDENCIES
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const mongoose = require("mongoose");
const methodOverride = require("method-override");

// index route
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/projects", (req, res) => {
  res.render("projects.ejs");
});

app.get("/projects/administrator", (req, res) => {
  res.render("administrator.ejs");
});

app.get("/projects/myparx", (req, res) => {
  res.render("myparx.ejs");
});

app.get("/projects/bikecollector", (req, res) => {
  res.render("bikecollector.ejs");
});

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Listen Route
app.listen(PORT, () => {
  console.log("listening on PORT", PORT);
});
