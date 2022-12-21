var config = require("./config.json");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const db = mysql.createPool({
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB,
});

// basic configuration
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//ports
app.listen(config.SERVER_PORT, () => {
  console.log(`Server running on port ${config.SERVER_PORT}`);
});

//get all users
app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM Employee";
  db.query(sqlGet, (error, result) => {
    if (!error) res.send(result);
    else console.log(error);
  });
});

//get user by id
app.get("/api/get/:id", (req, res) => {
  const { id } = req.params;
  const sqlRemove = "SELECT * FROM Employee WHERE user_id = ?";
  db.query(sqlRemove, id, (error, result) => {
    if (!error) res.send(result);
    else console.log(error);
  });
});

//add new user
app.post("/api/post", (req, res) => {
  const { first_name, last_name, salary } = req.body;
  const sqlInsert =
    "INSERT INTO Employee (first_name,last_name,salary) VALUES (?, ?, ?)";
  db.query(sqlInsert, [first_name, last_name, salary], (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send({ success: true });
    }
  });
});

//update user by id
app.put("/api/update/:id", (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, salary } = req.body;
  const sqlUpdate =
    "UPDATE Employee SET first_name = ?, last_name = ?, salary = ? WHERE user_id = ?";
  db.query(sqlUpdate, [first_name, last_name, salary, id], (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

//delete user by id
app.delete("/api/remove/:id", (req, res) => {
  const { id } = req.params;
  const sqlRemove = "DELETE FROM Employee WHERE user_id = ?";
  db.query(sqlRemove, id, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send({ success: true });
    }
  });
});

app.get("/", (req, res) => {
  res.send("main page");
});
