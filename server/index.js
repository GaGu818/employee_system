const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "employee_management_system",
});

// basic configuration
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//ports
app.listen(5001, () => {
  console.log("Server running on port 5001");
});

//test connection
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "123456",
//   database: "employee_management_system",
// });

// connection.connect(function (err) {
//   if (err) {
//     console.log("Error connecting to Database", err);
//     return;
//   }
//   console.log("Connection established");
// });

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
