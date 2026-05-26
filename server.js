// Import required libraries
const express = require("express");
const mysql = require("mysql2");
const path = require("path");

const app = express();

/*
Middleware:
Allows the server to read JSON data and serve
static files such as HTML, CSS, JavaScript and images.
*/
app.use(express.json());
app.use(express.static(path.join(__dirname)));

/*
MySQL connection:
The website uses this connection to retrieve
product data from the silvertech database.
*/
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "silvertech",
});

/*
Database connection check:
This confirms whether Node.js successfully connects
to MySQL before the website requests product data.
*/
db.connect(function (err) {
  if (err) {
    console.log("Database error:", err);
    return;
  }

  console.log("Connected to MySQL!");
});

/*
Home route:
When the user opens localhost:3000,
the server sends the main homepage.
*/
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

/*
Products API route:
This endpoint retrieves all product records from MySQL
and sends them to the frontend as JSON.
*/
app.get("/api/products", function (req, res) {
  db.query("SELECT * FROM products", function (err, results) {
    if (err) {
      res.status(500).json({ error: "Database error" });
      return;
    }

    res.json(results);
  });
});

/*
Start server:
Runs the application locally on port 3000.
*/
app.listen(3000, function () {
  console.log("Server running at http://localhost:3000");
});