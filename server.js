const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Connect to MySQL
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'silvertech'
  });

db.connect(function(err) {
  if (err) {
    console.log('Database error:', err);
    return;
  }
  console.log('Connected to MySQL!');
});

// Get all products
app.get('/api/products', function(req, res) {
  db.query('SELECT * FROM products', function(err, results) {
    if (err) {
      res.status(500).json({ error: 'Database error' });
      return;
    }
    res.json(results);
  });
});

// Start server
app.listen(3000, function() {
  console.log('Server running at http://localhost:3000');
});