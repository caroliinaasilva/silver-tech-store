const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Carol@2025",
    database: "silvertech"
});

connection.connect(function(error){

    if(error){
        console.log("Database connection failed");
        throw error;
    }

    console.log("Connected to MySQL");

});

module.exports = connection;