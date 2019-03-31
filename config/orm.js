var connection = require("../config/connection");


//questionmark helper
function createQmarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}
//helper that will translate the sql into a readable query
function translateSql(obj) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value)
        }
    }
    return arr.toString();
}

//create a variable called orm and export it which has selections and queries
var orm = {
    selectAll: function(table, cb) {
      var dbQuery = "SELECT * FROM " + table + ";";
  
      connection.query(dbQuery, function(err, res) {
        if (err) {
          throw err;
        }
        cb(res);
      });
    },
    
    insertOne: function (table, cols, vals, cb) {
        var dbQuery =
            "INSERT INTO " +
            table +
            " (" +
            cols.toString() +
            ") " +
            "VALUES (" +
            createQmarks(vals.length) +
            ") ";
        console.log(dbQuery);

        connection.query(dbQuery, vals, function (err, res) {
            if (err) {
                throw err;
            }
            //call it back
            cb(res);
        });
    },
    updateOne: function (table, objColVals, condition, cb) {
        var dbQuery =
            "UPDATE " +
            table +
            " SET " +
            translateSql(objColVals) +
            "WHERE " +
            condition;

        console.log(dbQuery);
        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            //call it back
            cb(res);
        });
    },
    //to help manage the additions to the tables
    deleteOne: function (table, condition, cb) {
        var dbQuery = "DELETE FROM " + table + "WHERE " + condition;
        console.log(dbQuery);
        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            //call it back
            cb(res);
        });
    }
};
module.exports = orm;