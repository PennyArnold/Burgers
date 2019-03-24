//Requirement MySql
var mysql = require("mysql");

//creating connection to the database
connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "John2012",
    database: "burgers_db"
});
connection.conect(function(err) {
    if (err) {
        console.error("error connecting " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
//export the module
module.exports = connection;