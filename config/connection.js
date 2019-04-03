//Requirement MySql
var mysql = require("mysql");
var connection;

//creating connection to the database
if (process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWSBD_URL);
} else {
    connection = mysql.createConnection({
    host: "s3lkt7lynu0uthj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "hqrbveyvjpv0nhzm",
    password: "bhyph9znfw6gpgqc",
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