const express = require("express");
const router = express.Router();
const db = require("../db");
/* GET home page. */
router.get("/", function (req, res, next) {
	res.send("Hello, world!");
});

module.exports = router;
