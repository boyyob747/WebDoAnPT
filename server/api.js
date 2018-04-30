 const express = require('express');
 const router = express.Router();
 const mysql = require('mysql');
 
 router.post('/dologin', function(req, res, next) {
     const username = req.body.username;
     const password = req.body.password;
     var sql = "SELECT UserID,MaChucVu,COUNT(username) as isCanLogin FROM `user` WHERE username = '"+username+"' AND password = '"+password+"'";
	res.locals.connection.query(sql, function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
	});
});
router.post('/thongtinuser', function(req, res, next) {
    const userId = req.body.userId;
    var sql = "SELECT user.UserID,user.name, user.username, user.email, user.DiaChi, user.GioiTinh, CAST(user.NgaySinh AS DATE) as NgaySinh, user.SoDienThoai, user.TrangThai, chucvu.TenCV FROM user INNER JOIN chucvu ON user.MaChucVu=chucvu.MaCV WHERE user.UserID='"+userId+"'";
   res.locals.connection.query(sql, function (error, results, fields) {
       if (error) throw error;
       res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
   });
});
router.get('/users', function(req, res, next) {
   res.locals.connection.query('SELECT * FROM `user`', function (error, results, fields) {
       if (error) throw error;
       res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
   });
});
//
router.get('/lastuserid', function(req, res, next) {
    res.locals.connection.query('SELECT MAX(UserID) as lastID FROM user', function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
router.get('/danhsachusers', function(req, res, next) {
    res.locals.connection.query('SELECT `UserID`, `name`, `username`, `email`, `GioiTinh`, `NgaySinh`,`TrangThai` FROM `user` ', function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
 router.get('/chucvu', function(req, res, next) {
    res.locals.connection.query('SELECT `MaCV`, `TenCV` FROM `chucvu`', function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
router.post('/adduser', function(req, res, next) {
    var sql = "INSERT INTO `user`( `name`, `username`, `email`, `password`, `DiaChi`, `GioiTinh`, `NgaySinh`, `SoDienThoai`, `TrangThai`, `MaChucVu`) VALUES "+
    "('"+req.body.name+"','"+req.body.username+"','"+req.body.email+"','"+req.body.password+"','"+req.body.DiaChi+"','"+req.body.GioiTinh
    +"','"+req.body.NgaySinh+"','"+req.body.SoDienThoai+"','"+req.body.TrangThai+"','"+req.body.MaChucVu+"')";
   res.locals.connection.query(sql, function (error, results, fields) {
       if (error) throw error;
       res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
   });
});
//Nganh hoc
router.get('/lastnganhid', function(req, res, next) {
    res.locals.connection.query('SELECT MAX(MaNH) as lastID FROM nganhhoc', function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
 router.get('/dsnganhhoc', function(req, res, next) {
    res.locals.connection.query('SELECT * FROM `nganhhoc`', function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
 router.post('/themnganh', function(req, res, next) {
    var sql = "INSERT INTO `nganhhoc`(`MaNH`, `TenNH`, `MoTa`) VALUES "+
    "('"+req.body.MaNH+"','"+req.body.TenNH+"','"+req.body.MoTa+"')";
   res.locals.connection.query(sql, function (error, results, fields) {
       if (error) throw error;
       res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
   });
});
router.post('/suanganh', function(req, res, next) {
    var sql = "UPDATE `nganhhoc` SET `TenNH`='"+req.body.TenNH+"',`MoTa`='"+req.body.MoTa+"' WHERE MaNH = '"+req.body.MaNH+"'";
   res.locals.connection.query(sql, function (error, results, fields) {
       if (error) throw error;
       res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
   });
});
router.post('/xoanganh', function(req, res, next) {
    var sql = "DELETE FROM `nganhhoc` WHERE MaNH = '"+req.body.MaNH+"'";
   res.locals.connection.query(sql, function (error, results, fields) {
       if (error) throw error;
       res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
   });
});
//truong
router.get('/dstruong', function(req, res, next) {
    res.locals.connection.query('SELECT * FROM `truong`', function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
 module.exports = router; // for fix error Router.use() requires a middleware function but got a Object