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
router.get('/getallusers/:orderby', function(req, res, next) {
    res.locals.connection.query('SELECT * FROM `user` ORDER BY '+ req.params.orderby, function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
router.get('/deleteuser/:id', function(req, res, next) {
    res.locals.connection.query('DELETE FROM `user` WHERE UserID =' + req.params.id, function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
 router.get('/khoauser/:id', function(req, res, next) {
    res.locals.connection.query('UPDATE `user` SET `TrangThai`=0 WHERE UserID =' + req.params.id, function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
 router.get('/kichhoatuser/:id', function(req, res, next) {
    res.locals.connection.query('UPDATE `user` SET `TrangThai`=1 WHERE UserID = ' + req.params.id, function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
router.post('/getuserbyid', function(req, res, next) {
    const userId = req.body.userId;
    var sql = "SELECT * FROM `user` WHERE user.UserID='"+userId+"'";
   res.locals.connection.query(sql, function (error, results, fields) {
       if (error) throw error;
       res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
   });
});
router.post('/updateuser', function(req, res, next) {
    const userId = req.body.userId;
    var sql = "UPDATE `user` SET `name`='"+req.body.name+"',`username`='"+req.body.username+"',`email`='"+req.body.email+"',`password`='"+req.body.password+"',`DiaChi`='"+req.body.DiaChi+"',`GioiTinh`='"+req.body.GioiTinh+"',`NgaySinh`='"+req.body.NgaySinh+"',`SoDienThoai`='"+req.body.SoDienThoai+"',`MaChucVu`='"+req.body.MaChucVu+"' WHERE UserID='"+userId+"'";
   res.locals.connection.query(sql, function (error, results, fields) {
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
router.post('/updatenganh', function(req, res, next) {
    var sql = "UPDATE `nganhhoc` SET `TenNH`='"+req.body.TenNH+"',`MoTa`='"+req.body.MoTa+"' WHERE MaNH='" + req.body.MaNH + "'";
   res.locals.connection.query(sql, function (error, results, fields) {
       if (error) throw error;
       res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
   });
});
//
router.get('/getnganhbyid/:MaNH', function(req, res, next) {
    var sql = 'SELECT * FROM `nganhhoc` WHERE MaNH ='+ req.params.MaNH;
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
router.get('/xoanganh/:MaNH', function(req, res, next) {
    var sql = "DELETE FROM `nganhhoc` WHERE MaNH = '"+req.params.MaNH+"'";
   res.locals.connection.query(sql, function (error, results, fields) {
       if (error) throw error;
       res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
   });
});
router.get('/xoanganhtruong/:maTruong', function(req, res, next) {
    var sql = "DELETE FROM `nganhtruong` WHERE MaTruong = '"+req.params.maTruong+"'";
   res.locals.connection.query(sql, function (error, results, fields) {
       if (error) throw error;
       res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
   });
});
router.get('/getnganhtruongbyid/:maTruong', function(req, res, next) {
    var sql = "SELECT * FROM `nganhtruong` WHERE MaTruong = '"+req.params.maTruong+"'";
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
 router.get('/gettruongbyid/:id', function(req, res, next) {
    res.locals.connection.query("SELECT * FROM `truong` WHERE idTruong='" + req.params.id + "'", function (error, results, fields) {
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
    "`DienThoai`='"+req.body.DienThoai + "' WHERE MaTruong = '" +req.body.MaTruong+ "'" ;
    console.log("sql = " + sql);
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
 router.get('/dssv/:orderby', function(req, res, next) {
    res.locals.connection.query('SELECT sinhvien.MaSV, sinhvien.TenSV, truong.TenTruong as TenTruong, nganhhoc.TenNH as TenNganh, sinhvien.GioiTinh, sinhvien.Email, sinhvien.NgaySinh, sinhvien.DienThoai, sinhvien.DiaChiThuongTru, sinhvien.DiaChiTamTru, sinhvien.idSV FROM `sinhvien` INNER JOIN nganhhoc ON sinhvien.MaNganh=nganhhoc.MaNH INNER JOIN truong ON sinhvien.MaTruong=truong.MaTruong ORDER BY '+ req.params.orderby, function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
 router.get('/getsv/:id', function(req, res, next) {
    res.locals.connection.query('SELECT * FROM `sinhvien` WHERE MaSV ='+ req.params.id, function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
 router.get('/deletesv/:id', function(req, res, next) {
    res.locals.connection.query('DELETE FROM `sinhvien` WHERE MaSV ='+ req.params.id, function (error, results, fields) {
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
router.post('/updatesinhvien', function(req, res, next) {
    var sql = "UPDATE `sinhvien` SET `TenSV`='"+req.body.TenSV+"',`MaTruong`='"+req.body.MaTruong+"',`MaNganh`='"+req.body.MaNganh+"',`GioiTinh`='"+req.body.GioiTinh
    +"',`Email`='"+req.body.Email+"',`NgaySinh`='"+req.body.NgaySinh+"',`DienThoai`='"+req.body.DienThoai+"',`DiaChiThuongTru`='"+req.body.DiaChiThuongTru
    +"',`DiaChiTamTru`='"+req.body.DiaChiTamTru+"' WHERE MaSV=" +req.body.MaSV;
   res.locals.connection.query(sql, function (error, results, fields) {
       if (error) throw error;
       res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
   });
});
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
 router.get('/getlienbyid/:id', function(req, res, next) {
    res.locals.connection.query("SELECT * FROM `lienhe` WHERE MaLienHe ='"+ req.params.id + "'", function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
 router.get('/xoalienhe/:id', function(req, res, next) {
    res.locals.connection.query('DELETE FROM `lienhe` WHERE MaLienHe ='+ req.params.id, function (error, results, fields) {
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
//send email

router.post('/sendemail', function(req, res, next) {
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'doanpt2018@gmail.com',
        pass: 'doanpt123'
      }
    });
    var mailOptions = {
      from: 'HeThongThongKE',
      to: req.body.toEmail,
      subject: req.body.subject,
      text: req.body.text
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": 'Email sent: ' + info.response}));
      }
    }); 
});

//ket-qua-khao-sat
router.get('/getketquakhaosat/', function(req, res, next) {
    res.locals.connection.query('SELECT phieuketquakhaosat.MaPKQKS, phieuketquakhaosat.ThoiGianNopKS,phieuketquakhaosat.MaSV,sinhvien.TenSV,sinhvien.GioiTinh,truong.TenTruong,nganhhoc.TenNH,GROUP_CONCAT(cauhoi.NoiDungCH) AS CauHoi,GROUP_CONCAT(thongtindienkhatsat.CauTraLoi) AS CauTraLoi FROM phieuketquakhaosat INNER JOIN sinhvien ON phieuketquakhaosat.MaSV=sinhvien.MaSV INNER JOIN truong ON sinhvien.MaTruong=truong.MaTruong INNER JOIN nganhhoc ON sinhvien.MaNganh=nganhhoc.MaNH LEFT JOIN thongtindienkhatsat ON thongtindienkhatsat.MaPKQKS=phieuketquakhaosat.MaPKQKS LEFT JOIN cauhoi ON thongtindienkhatsat.MaCauHoi=cauhoi.MaCH ORDER BY phieuketquakhaosat.MaPKQKS', function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
 router.get('/getcauhoibyid/:id', function(req, res, next) {
    res.locals.connection.query("SELECT * FROM `cauhoi` WHERE MaPKS ='"+ req.params.id+ "'", function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
 // VALUES ([value-1],[value-2],[value-3])
 router.post('/themthongtindienkhatsat', function(req, res, next) {
    var sql = "INSERT INTO `thongtindienkhatsat`( `MaPKQKS`, `MaCauHoi`, `CauTraLoi`) VALUES ('"+req.body.MaPKQKS+"','"+req.body.MaCauHoi+"','"+req.body.CauTraLoi+"')";
   res.locals.connection.query(sql, function (error, results, fields) {
       if (error) throw error;
       res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
   });
});
 router.get('/getphieukhaosat/', function(req, res, next) {
    res.locals.connection.query('SELECT * FROM `phieukhaosat`', function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
router.post('/themphieuketquakhaosat', function(req, res, next) {
    var sql = "INSERT INTO `phieuketquakhaosat`( `ThoiGianNopKS`, `MaPKS`) VALUES (NOW(),'"+req.body.MaPKS+"')";
   res.locals.connection.query(sql, function (error, results, fields) {
       if (error) throw error;
       res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
   });
});
router.get('/getoption/:id', function(req, res, next) {
    res.locals.connection.query("SELECT * FROM `_option` WHERE MaCH='"+ req.params.id+ "'", function (error, results, fields) {
        //if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
 router.get('/getoptions/', function(req, res, next) {
    res.locals.connection.query("SELECT * FROM `_option`", function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });

//thong ke 
router.get('/thongsosvdalamviec/', function(req, res, next) {
    res.locals.connection.query("SELECT COUNT(id) AS TongSo  FROM `thongtindienkhatsat` WHERE MaCauHoi = 6 AND CauTraLoi = 'Đã có việc làm'", function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
 router.get('/svlamtainhanuoc/', function(req, res, next) {
    res.locals.connection.query("SELECT COUNT(id) AS TongSo   FROM `thongtindienkhatsat` WHERE MaCauHoi = 7 AND CauTraLoi = 'Khu vực nhà nước'", function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
 router.get('/svlmtunhan/', function(req, res, next) {
    res.locals.connection.query("SELECT COUNT(id) AS TongSo  FROM `thongtindienkhatsat` WHERE MaCauHoi = 7 AND CauTraLoi = 'Khu vực tư nhân'", function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
 router.get('/svlmnuocngoai/', function(req, res, next) {
    res.locals.connection.query("SELECT COUNT(id) AS TongSo  FROM `thongtindienkhatsat` WHERE MaCauHoi = 7 AND CauTraLoi = 'Liên doanh nước ngoài'", function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
 router.get('/svtutaoviec/', function(req, res, next) {
    res.locals.connection.query("SELECT COUNT(id) AS TongSo  FROM `thongtindienkhatsat` WHERE MaCauHoi = 7 AND CauTraLoi = 'Tự tạo việc làm'", function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });

 router.get('/thongkekucvucvieclamsv/', function(req, res, next) {
    res.locals.connection.query("SELECT COUNT(id) AS TongSo  FROM `thongtindienkhatsat` WHERE MaCauHoi = 6 AND CauTraLoi = 'Đã có việc làm' UNION ALL SELECT COUNT(id) AS TongSo   FROM `thongtindienkhatsat` WHERE MaCauHoi = 7 AND CauTraLoi = 'Khu vực nhà nước' UNION ALL SELECT COUNT(id) AS TongSo  FROM `thongtindienkhatsat` WHERE MaCauHoi = 7 AND CauTraLoi = 'Khu vực tư nhân' UNION ALL SELECT COUNT(id) AS TongSo  FROM `thongtindienkhatsat` WHERE MaCauHoi = 7 AND CauTraLoi = 'Liên doanh nước ngoài' UNION ALL SELECT COUNT(id) AS TongSo  FROM `thongtindienkhatsat` WHERE MaCauHoi = 7 AND CauTraLoi = 'Tự tạo việc làm' ", function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
 router.get('/thoneketinhtrangvieclamsv/', function(req, res, next) {
    res.locals.connection.query("SELECT COUNT(MaPKQKS) AS TongSo FROM `phieuketquakhaosat` UNION ALL SELECT COUNT(id)FROM `thongtindienkhatsat` WHERE MaCauHoi = 6 AND CauTraLoi = 'Đã có việc làm'   UNION ALL SELECT COUNT(id)FROM `thongtindienkhatsat` WHERE MaCauHoi = 6 AND CauTraLoi = 'Chưa có việc làm' UNION ALL SELECT COUNT(id)FROM `thongtindienkhatsat` WHERE MaCauHoi = 6 AND CauTraLoi = 'Học lên'", function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
 router.get('/thonekelamdungnganh/', function(req, res, next) {
    res.locals.connection.query("SELECT COUNT(id) AS TongSo FROM `thongtindienkhatsat` WHERE MaCauHoi = 6 AND CauTraLoi = 'Đã có việc làm' UNION ALL SELECT COUNT(id)FROM `thongtindienkhatsat` WHERE  MaCauHoi = 8 AND CauTraLoi = 'Đúng ngành' UNION ALL SELECT COUNT(id) FROM `thongtindienkhatsat` WHERE MaCauHoi = 8 AND CauTraLoi = 'Không đúng ngành'", function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
 router.get('/thonekemucluong/', function(req, res, next) {
    res.locals.connection.query("SELECT COUNT(id) AS TongSo FROM `thongtindienkhatsat` WHERE MaCauHoi = 6 AND CauTraLoi = 'Đã có việc làm' UNION ALL SELECT COUNT(id)FROM `thongtindienkhatsat` WHERE MaCauHoi = 9 AND CauTraLoi = 'Dưới 5 triệu' UNION ALL SELECT COUNT(id) FROM `thongtindienkhatsat` WHERE MaCauHoi = 9 AND CauTraLoi = 'Từ 5 đến 10 triệu' UNION ALL SELECT COUNT(id)FROM `thongtindienkhatsat` WHERE MaCauHoi = 9 AND CauTraLoi = 'Trên 10 triệu'", function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
 router.get('/thonekethoigiancoviec/', function(req, res, next) {
    res.locals.connection.query("SELECT COUNT(id) AS TongSo FROM `thongtindienkhatsat` WHERE MaCauHoi = 6 AND CauTraLoi = 'Đã có việc làm' UNION ALL SELECT COUNT(id)FROM `thongtindienkhatsat` WHERE MaCauHoi = 10 AND CauTraLoi = 'Dưới 3 tháng' UNION ALL SELECT COUNT(id) FROM `thongtindienkhatsat`WHERE MaCauHoi = 10 AND CauTraLoi = 'Từ 3 đến 6 tháng' UNION ALL SELECT COUNT(id)FROM `thongtindienkhatsat` WHERE MaCauHoi = 10 AND CauTraLoi = 'Từ 6 tháng đến 1 năm' UNION ALL SELECT COUNT(id)FROM `thongtindienkhatsat` WHERE MaCauHoi = 10 AND CauTraLoi = 'Trên 1 năm'", function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
 module.exports = router; // for fix error Router.use() requires a middleware function but got a Object