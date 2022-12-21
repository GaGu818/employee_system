const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

// basic configuration
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//ports
app.listen(5001, () => {
  console.log("Server running on port 50");
});

app.get("/", (req, res) => {
  res.send("main page");
});
