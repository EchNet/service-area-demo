const express = require('express');
const morgan = require("morgan")
const mustache = require("mustache-express")

const PORT = process.env.PORT || 80;
const INDEX = '/index.html';

var footerContent = "" +
  "<span>This is the footer</span>" +
  '<script type="text/javascript" src="https://myservicearea-staging.herokuapp.com/code/ujSjDzzrJkJLZ7xK.js"></script>';


const server = express()
  .engine("html", mustache())
  .set("view engine", "html")
  .set("view cache", false)
  .set("views", __dirname + "/views")
  .use(morgan("tiny"))
  .use(express.static("./static"))
  .use(express.urlencoded({ extended: true }))
  .get("/", (req, res) => {
    var context = { footer: footerContent };
    res.render("index", context);
  })
  .get("/service-form.html", (req, res) => {
    var context = { footer: footerContent };
    res.render("service-form", context);
  })
  .get("/service-form-north.html", (req, res) => {
    var context = { footer: footerContent };
    res.render("service-form-north", context);
  })
  .get("/service-form-south.html", (req, res) => {
    var context = { footer: footerContent };
    res.render("service-form-south", context);
  })
  .get("/cms.html", (req, res) => {
    var context = { footer: footerContent };
    res.render("cms", context);
  })
  .post("/cms", (req, res) => {
    footerContent = req.body.footer;
    res.redirect("/cms.html")
  })
  .get("/log", (req, res) => {
    res.json("logged")
  })
  .post("/log", (req, res) => {
    res.json("logged")
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
