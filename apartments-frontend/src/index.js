const express = require('express');
const cors = require('cors');
const mysql = require('mysql2'); // or mysql
const app = express();

app.use(cors()); // This enables CORS for all requests

// Your database setup
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Home route (optional)
app.get('/', (req, res) => {
  res.send('Hello from Railway Node.js + MySQL app!');
});

// Apartments API endpoint
app.get('/apartments', (req, res) => {
  connection.query('SELECT * FROM apartment_details', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error', details: err });
    }
    res.json(results); // This will send an array your React app expects
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
