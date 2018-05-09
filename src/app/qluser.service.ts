import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
@Injectable()
export class QluserService {

  readonly rootUrl = "http://localhost:8081";
  constructor(private http:Http) { }
  getUsers(){
    return this.http.get(this.rootUrl + '/api/danhsachusers').map(res=>res.json().response);
  }
  getAllUser(orderBy:any){
    return this.http.get(this.rootUrl + '/api/getallusers/' + orderBy).map(res=>res.json().response);
  }
  doLogin(username:string,password:string){
    const data = {"username" : username,"password" : password};
    return this.http.post(this.rootUrl + '/api/dologin',data).map(res=>res.json().response);
  }
  getThongtinCaNhan(userId:string){
    const data = {"userId" : userId};
    return this.http.post(this.rootUrl + '/api/thongtinuser',data).map(res=>res.json().response);
  }
  getUserByID(userId:string){
    const data = {"userId" : userId};
    return this.http.post(this.rootUrl + '/api/getuserbyid',data).map(res=>res.json().response);
  }
  getChucVu(){
    return this.http.get(this.rootUrl + '/api/chucvu').map(res=>res.json().response);
  }
  getLastUserID(){
    return this.http.get(this.rootUrl + '/api/lastuserid').map(res=>res.json().response);
  }
  addUser(name:string,username:string,password:string,email:string,DiaChi:string,GioiTinh:string,NgaySinh:any,SoDienThoai:string,TrangThai:string,MaChucVu:string){
    const data = {"name" : name,
    "username" : username,
    "email" : email,
    "password" : password,
    "DiaChi" : DiaChi,
    "GioiTinh" : GioiTinh,
    "NgaySinh" : NgaySinh,
    "SoDienThoai" : SoDienThoai,
    "TrangThai" : TrangThai,
    "MaChucVu" : MaChucVu};
    return this.http.post(this.rootUrl + '/api/adduser',data).map(res=>res.json().response);
  }
  updateUser(userId:string,name:string,username:string,password:string,email:string,DiaChi:string,GioiTinh:string,NgaySinh:any,SoDienThoai:string,MaChucVu:string){
    const data = {"userId" : userId ,
    "name" : name,
    "username" : username,
    "email" : email,
    "password" : password,
    "DiaChi" : DiaChi,
    "GioiTinh" : GioiTinh,
    "NgaySinh" : NgaySinh,
    "SoDienThoai" : SoDienThoai,
    "MaChucVu" : MaChucVu};
    return this.http.post(this.rootUrl + '/api/updateuser',data).map(res=>res.json().response);
  }
  deleteUser(userId:any){
    return this.http.get(this.rootUrl + '/api/deleteuser/'+userId).map(res=>res.json().response);
  }
  khoaUser(userId:any){
    return this.http.get(this.rootUrl + '/api/khoauser/'+userId).map(res=>res.json().response);
  }
  KichHoatUser(userId:any){
    return this.http.get(this.rootUrl + '/api/kichhoatuser/'+userId).map(res=>res.json().response);
  }
  getDSnganh(){
    return this.http.get(this.rootUrl + '/api/dsnganhhoc').map(res=>res.json().response);
  }
  addNganh(MaNH:string,TenNH:string,MoTa:string){
    const data = {"MaNH" : MaNH,
    "TenNH" : TenNH,
    "MoTa" : MoTa};
    return this.http.post(this.rootUrl + '/api/themnganh',data).map(res=>res.json().response);
  }
  updateNganh(MaNH:string,TenNH:string,MoTa:string){
    const data = {"MaNH" : MaNH,
    "TenNH" : TenNH,
    "MoTa" : MoTa};
    return this.http.post(this.rootUrl + '/api/updatenganh',data).map(res=>res.json().response);
  }
  suaNganh(MaNH:string,TenNH:string,MoTa:string){
    const data = {"MaNH" : MaNH,
    "TenNH" : TenNH,
    "MoTa" : MoTa};
    return this.http.post(this.rootUrl + '/api/suanganh',data).map(res=>res.json().response);
  }
  xoaNganh(MaNH:string){
    return this.http.get(this.rootUrl + '/api/xoanganh/'+MaNH).map(res=>res.json().response);
  }
  getDsTruong(){
    return this.http.get(this.rootUrl + '/api/dstruong').map(res=>res.json().response);
  }
  getNganhTruong(){
    return this.http.get(this.rootUrl + '/api/getnganhtruong').map(res=>res.json().response);
  }
  addTruong(idTruong:string,TenTruong:string,DiaChi:string
    ,NamThanhLap:any,TamNhin:string,SuMang
    ,GioiThieu:string,Logo:string,HieuTruong:string,DienThoai:string){
    const data = {"idTruong" : idTruong,
    "TenTruong" : TenTruong,
    "DiaChi" : DiaChi,
    "NamThanhLap" : NamThanhLap,
    "TamNhin" : TamNhin,
    "SuMang" : SuMang,
    "GioiThieu" : GioiThieu,
    "Logo" : Logo,
    "HieuTruong" : HieuTruong,
    "DienThoai" : DienThoai,};
    return this.http.post(this.rootUrl + '/api/themtruong',data).map(res=>res.json().response);
  }
  updateTruong(idTruong:string,TenTruong:string,DiaChi:string
    ,NamThanhLap:any,TamNhin:string,SuMang
    ,GioiThieu:string,Logo:string,HieuTruong:string,DienThoai:string){
    const data = {"idTruong" : idTruong,
    "TenTruong" : TenTruong,
    "DiaChi" : DiaChi,
    "NamThanhLap" : NamThanhLap,
    "TamNhin" : TamNhin,
    "SuMang" : SuMang,
    "GioiThieu" : GioiThieu,
    "Logo" : Logo,
    "HieuTruong" : HieuTruong,
    "DienThoai" : DienThoai,};
    return this.http.post(this.rootUrl + '/api/suatruong',data).map(res=>res.json().response);
  }
  getTruong(idTruong:any){
    return this.http.get(this.rootUrl + '/api/gettruongbyid/'+ idTruong).map(res=>res.json().response);
  }
  suaTruong(MaTruong:string,TenTruong:string,DiaChi:string
    ,NamThanhLap:any,TamNhin:string,SuMang
    ,GioiThieu:string,Logo:string,HieuTruong:string,DienThoai:string){
    const data = {"MaTruong" : MaTruong,
    "TenTruong" : TenTruong,
    "DiaChi" : DiaChi,
    "NamThanhLap" : NamThanhLap,
    "TamNhin" : TamNhin,
    "SuMang" : SuMang,
    "GioiThieu" : GioiThieu,
    "Logo" : Logo,
    "HieuTruong" : HieuTruong,
    "DienThoai" : DienThoai,};
    return this.http.post(this.rootUrl + '/api/suatruong',data).map(res=>res.json().response);
  }
  xoaTruong(MaTruong:string){
    const data = {"MaTruong" : MaTruong};
    return this.http.post(this.rootUrl + '/api/xoatruong',data).map(res=>res.json().response);
  }
  addNganhTruong(maNganhs:any[],maTruong:string){
    var values = "";
    var index = 0;
    for (let maNganh of maNganhs) {
      values = values + "('" + maTruong + "','" + maNganh + "')";
      index = index + 1;
      if (index != maNganhs.length){
        values = values + ",";
      }
    }
    const data = {"values" : values};
    return this.http.post(this.rootUrl + '/api/addnganhtruong',data).map(res=>res.json().response);
  }
  xoaNganhTruong(maTruong:string){
    return this.http.get(this.rootUrl + '/api/xoanganhtruong/'+maTruong).map(res=>res.json().response);
  }
  getNganhTruongById(maTruong:string){
    return this.http.get(this.rootUrl + '/api/getnganhtruongbyid/'+maTruong).map(res=>res.json().response);
  }
  getNganhByID(MaNH:any){
    return this.http.get(this.rootUrl + '/api/getnganhbyid/'+MaNH).map(res=>res.json().response);
  }
  getSinhvien(){
    return this.http.get(this.rootUrl + '/api/dssinhvien').map(res=>res.json().response);
  }
  getSV(maSV:string){
    return this.http.get(this.rootUrl + '/api/getsv/'+maSV).map(res=>res.json().response);
  }
  getSinhvienOrder(orderBy:any){
    return this.http.get(this.rootUrl + '/api/dssv/'+orderBy).map(res=>res.json().response);
  }
  xoaSinhvien(MaTruong:string){
    const data = {"MaTruong" : MaTruong};
    return this.http.post(this.rootUrl + '/api/xoasinhvien',data).map(res=>res.json().response);
  }
  addSinhvien(MaSV:string,TenSV:string,MaTruong:string,MaNganh:string,GioiTinh:string,
  Email:string,NgaySinh:any,DienThoai:string,DiaChiThuongTru:string,
  DiaChiTamTru:string){
    const data = {"MaSV" : MaSV,
    "TenSV" : TenSV,
    "MaTruong" : MaTruong,
    "MaNganh" : MaNganh,
    "GioiTinh" : GioiTinh,
    "Email" : Email,
    "NgaySinh" : NgaySinh,
    "DienThoai" : DienThoai,
    "DiaChiThuongTru" : DiaChiThuongTru,
    "DiaChiTamTru" : DiaChiTamTru,};
    return this.http.post(this.rootUrl + '/api/themsinhvien',data).map(res=>res.json().response);
  }
  updateSinhvien(MaSV:string,TenSV:string,MaTruong:string,MaNganh:string,GioiTinh:string,
    Email:string,NgaySinh:any,DienThoai:string,DiaChiThuongTru:string,
    DiaChiTamTru:string){
      const data = {"MaSV" : MaSV,
      "TenSV" : TenSV,
      "MaTruong" : MaTruong,
      "MaNganh" : MaNganh,
      "GioiTinh" : GioiTinh,
      "Email" : Email,
      "NgaySinh" : NgaySinh,
      "DienThoai" : DienThoai,
      "DiaChiThuongTru" : DiaChiThuongTru,
      "DiaChiTamTru" : DiaChiTamTru,};
      return this.http.post(this.rootUrl + '/api/updatesinhvien',data).map(res=>res.json().response);
    }
    deleteSinhvien(MaSV:string){
      return this.http.get(this.rootUrl + '/api/deletesv/'+MaSV).map(res=>res.json().response);
    }
  //line he 
  getdslienhe(){
    return this.http.get(this.rootUrl + '/api/dslienhe').map(res=>res.json().response);
  }
  getlienhe(id:any){
    return this.http.get(this.rootUrl + '/api/getlienbyid/'+id).map(res=>res.json().response);
  }
  xoaLienhe(id:string){
    return this.http.get(this.rootUrl + '/api/xoalienhe/'+id).map(res=>res.json().response);
  }
  sendLienHe(HoTen:string,Email:string,ChuDe:string,NoiDung:string){
    const data = {"HoTen" : HoTen,
    "Email" : Email,
    "ChuDe" : ChuDe,
    "NoiDung" : NoiDung};
    return this.http.post(this.rootUrl + '/api/themlienhe',data).map(res=>res.json().response);
  }
  traloithongtin(toEmail:string,subject:string,text:string){
    const data = {"toEmail" : toEmail,
    "subject" : subject,
    "text" : text};
    return this.http.post(this.rootUrl + '/api/sendemail',data).map(res=>res.json().response);
  }
}
