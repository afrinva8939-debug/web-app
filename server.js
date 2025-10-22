require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/apartments', (req, res) => {
  const search = req.query.q;
  let sql = 'SELECT * FROM apartment_details'; // replace with your actual table name
  if (search) {
    sql += ` WHERE apt_result_apartment_name LIKE '%${search}%' OR apt_result_address LIKE '%${search}%'`;
  }
  db.query(sql, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
