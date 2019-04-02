//Requirement MySql
var mysql = require("mysql");
var connection;

//creating connection to the database
if (process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWSBD_URL);
} else {
    connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "John2012",
    database: "burgers_db"
});
};


/* connection.connect(function(err) {
    if (err) {
        console.error("error connecting " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId); */
// });
//export the module

connection.connect();
module.exports = connection;