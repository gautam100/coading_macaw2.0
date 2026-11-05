const mysql = require("mysql2")

const connectionString =({
    host : "localhost",
    user: "root",
    password: "Gautamdev2025",
    database: "abc_corporation"
})

const connection = mysql.createConnection(connectionString)
connection.connect((err,res)=>{
    if(err){
        console.log("Error in DB connection",err)
    }else{
        console.log("Database connected successfully!")
    }
})

module.exports = connection