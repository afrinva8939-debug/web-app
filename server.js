require('dotenv').config();
const express = require('express');
const db = require('./db'); // Import your db.js file
const app = express();
const PORT = process.env.PORT || 3001;

// Check app health
app.get('/', (req, res) => {
  res.send('Hello from Railway Node.js + MySQL app!');
});

// The full API route for apartment details
app.get('/apartments', (req, res) => {
  db.query('SELECT * FROM apartment_details', (err, results) => {
    if (err) {
      console.error('Error fetching apartment details:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
