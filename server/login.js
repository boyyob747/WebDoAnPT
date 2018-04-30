const express = require('express');
const router = express.Router();
const mysql = require('mysql');

router.get('/dologin', function(req, res, next) {
	res.locals.connection.query('SELECT * from user', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});
 
 module.exports = router; // for fix error Router.use() requires a middleware function but got a Object