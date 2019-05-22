const express = require('express');
const os = require('os');
const router = express.Router();
const db = require("../dbconnection");

router.get('/getUser', (req, res) => {
    db.query("SELECT * FROM users", (err, rows) => {
        if (!err) {
         res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            // res.send(err);
            res.send(err);
        }
    });
});

module.exports = router;