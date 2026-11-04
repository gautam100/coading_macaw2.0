const mysql = require("mysql2");

const connectionString = {
  host: "localhost",
  user: "root",
  password: "Gautamdev2025", //Enter your own root password
  database: "abc_corporation", //Enter your own db name
};

const connection = mysql.createConnection(connectionString);

connection.connect((err, res) => {
  if (err) {
    console.log("Error in DB connection", JSON.stringify(err));
  } else {
    console.log("Database connected successfully!");
  }
});

module.exports = connection;
