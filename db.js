const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: '0.0.0.0',       // Replace with your database host
  user: 'root',            // Replace with your database username
  password: 'Tatakae-nitro',    // Replace with your database password
  database: 'mydatabase'  // Replace with your database name
});

// Open the MySQL connection
connection.connect(error => {
  if (error) {
    console.error('An error occurred while connecting to the DB:', error);
    return;
  }
  console.log('Connected to the MySQL server.');
});

// Export the connection
module.exports = connection;
