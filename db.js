const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.DB_HOST,        // use Railway's host, e.g. "containers-x8761..."
  port: 3306,                       // MySQL default port, confirm with Railway
  user: process.env.DB_USER,        // As given by Railway
  password: process.env.DB_PASS,    // As given by Railway
  database: process.env.DB_NAME     // Your DB name on Railway
});
connection.connect((err) => {
  if (err) console.error('DB connection error:', err);
  else console.log('Connected to MySQL!');
});
module.exports = connection;
