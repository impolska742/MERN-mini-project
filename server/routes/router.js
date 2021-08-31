const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/about", (req, res) => {
  res.send("Hello About World");
});

router.get("/contact", (req, res) => {
  res.send("Hello Contact World");
});

router.get("/signin", (req, res) => {
  res.send("Hello Sign In World");
});

router.get("/signup", (req, res) => {
  res.send("Hello Sign Up World");
});

module.exports = router;
