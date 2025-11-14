// const mysql = require('mysql2')

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'manager',
//     database: 'movie_review'
// })

// module.exports = pool
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // Use your MySQL username
  password: 'manager',       // Use your MySQL password
  database: 'movie_reviews'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the MySQL database.');
  }
});

module.exports = connection;