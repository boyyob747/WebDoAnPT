const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    res.setHeader('Access-Control-Allow-Credentials',true);
    next();
});
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : false
}))
app.use(function(req, res, next){
	res.locals.connection = mysql.createConnection({
        host:"localhost",
        user: "root",
        password : "",
        database : "ad01_db",
        timezone : "UTC+0",
        dateStrings : true
	});
	next();
});
var api = require('./server/api.js');
app.use('/api',api);
app.use('*',function(req,res){
    res.sendfile(path.join(__dirname,'dist/index.html'));
})
const server = app.listen(8081, function(){
    const port = server.address().port;
    console.log("Server is running .. at port %s ",port);
})