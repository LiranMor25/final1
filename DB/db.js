const mysql = require("mysql2");
const dbConfig = require("./db.config.js");


// Create a connection to the database
const connection =  mysql.createPool({
host: dbConfig.HOST,
user: dbConfig.USER,
password: dbConfig.PASSWORD,
database: dbConfig.DB,
//timezone: dbConfig.TIMEZONE
});


connection.getConnection(function(err, connection) {
    if (err) throw err; // not connected!
    console.log("Successfully connected to the database.");
});

// // open the MySQL connection
// connection.connect(error => {
// if (error) throw error;
// console.log("Successfully connected to the database.");
// });


module.exports = connection;