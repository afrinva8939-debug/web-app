require('dotenv').config();
const express = require('express');
const db = require('./db');
const app = express();
const PORT = process.env.PORT || 3001;

// Example API route that queries an "apartments" table
app.get('/apartments', (req, res) => {
  db.query('SELECT * FROM apartments', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Home route (optional)
app.get('/', (req, res) => {
  res.send('Hello from Railway Node.js + MySQL app!');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
