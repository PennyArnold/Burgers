//requirements
var express = require("express");
var burger = require("../models/burger");

var router = express.Router();
//identifies endpoints
//"get" router to handlebars object
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hdbrsObj = {
            burgers: data
        };
        console.log(hdbrsObj);
        res.render("index", hdbrsObj);
    });

    //"post" router
    router.post("/api/burgers", function (req, res) {
        burger.insertOne(
            ["burger_name", "devoured"],
            [req.body.burger_name, req.body.devoured],
            function (result) {
                //send back the ID of the new burger
                res.json({
                    id: result.insertId
                });
            }
        );
    });
    router.put("/api/burgers/:id", function (req, res) {
        var condition = "id - " + req.params.id;

        console.log("condition", condition);
        burger.updateOne({
            devoured: req.body.devoured
        }, condition, function (result) {
            if ((result.changedRows === 0)) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });

        burger.deleteOne(condition, function (result) {
            console.log("delete in controller");
            if ((result.changedRows === 0)) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });

});

module.exports = router;