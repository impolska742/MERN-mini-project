const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config({
  path: "../.env",
});

const router = require("./routes/router");

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
