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
router.get('/getnganhtruong', function(req, res, next) {
    var sql = "SELECT truong.MaTruong as MaTruong,truong.TenTruong as TenTruong,nganhhoc.MaNH as MaNganh ,nganhhoc.TenNH as TenNH , nganhhoc.MaNH as MaNH FROM `nganhtruong`  INNER JOIN truong on nganhtruong.MaTruong=truong.MaTruong INNER JOIN nganhhoc ON nganhtruong.MaNganh=nganhhoc.MaNH ";
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
 router.post('/themtruong', function(req, res, next) {
    var sql = "INSERT INTO `truong`(`idTruong`,`TenTruong`, `DiaChi`, `NamThanhLap`, `TamNhin`,"+
    " `SuMang`, `GioiThieu`, `Logo`, `HieuTruong`, `DienThoai`) VALUES "+
    "('"+req.body.idTruong+"','"+req.body.TenTruong+"','"+req.body.DiaChi+"','"
    +req.body.NamThanhLap+"','"+req.body.TamNhin+"','"+req.body.SuMang+"','"
    +req.body.GioiThieu+"','"+req.body.Logo+"','"+req.body.HieuTruong+"','"+req.body.DienThoai+"')";
   res.locals.connection.query(sql, function (error, results, fields) {
       if (error) throw error;
       res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
   });
});
router.post('/suatruong', function(req, res, next) {
    var sql = "UPDATE `truong` SET `TenTruong`='"+req.body.TenTruong+"',`DiaChi`='"+req.body.DiaChi+"',"+
    "`NamThanhLap`='"+req.body.NamThanhLap+"',`TamNhin`='"+req.body.TamNhin+"',`SuMang`='"+req.body.SuMang+"',"+
    "`GioiThieu`='"+req.body.GioiThieu+"',`Logo`='"+req.body.Logo+"',`HieuTruong`='"+req.body.HieuTruon+"',"+
    "`DienThoai`='"+req.body.DienThoai + " WHERE MaTruong = '" +req.body.MaTruong+ "'" ;
   res.locals.connection.query(sql, function (error, results, fields) {
       if (error) throw error;
       res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
   });
});
router.post('/xoatruong', function(req, res, next) {
    var sql = "DELETE FROM `truong` WHERE MaTruong = '"+req.body.MaTruong+"'";
   res.locals.connection.query(sql, function (error, results, fields) {
       if (error) throw error;
       res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
   });
});

//ket noi nganh voi truong
router.post('/addnganhtruong', function(req, res, next) {
    var sql = "INSERT INTO `nganhtruong`( `MaTruong`, `MaNganh`) VALUES "+req.body.values+"";
   res.locals.connection.query(sql, function (error, results, fields) {
       if (error) throw error;
       res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
   });
});
//sinh vien
router.get('/dssinhvien', function(req, res, next) {
    res.locals.connection.query('SELECT sinhvien.MaSV, sinhvien.TenSV, truong.TenTruong as TenTruong, nganhhoc.TenNH as TenNganh, sinhvien.GioiTinh, sinhvien.Email, sinhvien.NgaySinh, sinhvien.DienThoai, sinhvien.DiaChiThuongTru, sinhvien.DiaChiTamTru, sinhvien.idSV FROM `sinhvien` INNER JOIN nganhhoc ON sinhvien.MaNganh=nganhhoc.MaNH INNER JOIN truong ON sinhvien.MaTruong=truong.MaTruong', function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
 router.post('/themsinhvien', function(req, res, next) {
    var sql = "INSERT INTO `sinhvien`(`MaSV`,`TenSV`, `MaTruong`, `MaNganh`, `GioiTinh`, `Email`, `NgaySinh`, `DienThoai`, `DiaChiThuongTru`, `DiaChiTamTru`) VALUES ("+
    "'"+req.body.MaSV+"','"+req.body.TenSV+"','"+req.body.MaTruong+"','"+req.body.MaNganh+"','"+req.body.GioiTinh+"','"
    +req.body.Email+"','"+req.body.NgaySinh+"','"+req.body.DienThoai+"','"+req.body.DiaChiThuongTru+"','"
    +req.body.DiaChiTamTru+"')";
    console.log("sql = " + sql);
   res.locals.connection.query(sql, function (error, results, fields) {
       if (error) throw error;
       res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
   });
});
// router.post('/suasinhvien', function(req, res, next) {
//     var sql = "UPDATE `nganhhoc` SET `TenNH`='"+req.body.TenNH+"',`MoTa`='"+req.body.MoTa+"' WHERE MaNH = '"+req.body.MaNH+"'";
//    res.locals.connection.query(sql, function (error, results, fields) {
//        if (error) throw error;
//        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
//    });
// });
router.post('/xoasinhvien', function(req, res, next) {
    var sql = "DELETE FROM `sinhvien` WHERE MaSV = '"+req.body.MaSV+"'";
   res.locals.connection.query(sql, function (error, results, fields) {
       if (error) throw error;
       res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
   });
});
//quan ly lien he
router.get('/dslienhe', function(req, res, next) {
    res.locals.connection.query('SELECT * FROM `lienhe`', function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
 router.post('/themlienhe', function(req, res, next) {
    var sql = "INSERT INTO `lienhe`(`HoTen`, `Email`, `ChuDe`, `NoiDung`) VALUES ('"+req.body.HoTen+"','"+req.body.Email+"','"+req.body.ChuDe+"','"+req.body.NoiDung+"')";
   res.locals.connection.query(sql, function (error, results, fields) {
       if (error) throw error;
       res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
   });
});
 module.exports = router; // for fix error Router.use() requires a middleware function but got a Object