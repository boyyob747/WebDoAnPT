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
  doLogin(username:string,password:string){
    const data = {"username" : username,"password" : password};
    return this.http.post(this.rootUrl + '/api/dologin',data).map(res=>res.json().response);
  }
  getThongtinCaNhan(userId:string){
    const data = {"userId" : userId};
    return this.http.post(this.rootUrl + '/api/thongtinuser',data).map(res=>res.json().response);
  }
  getChucVu(){
    return this.http.get(this.rootUrl + '/api/chucvu').map(res=>res.json().response);
  }
  getLastUserID(){
    return this.http.get(this.rootUrl + '/api/lastuserid').map(res=>res.json().response);
  }
  addUser(name:string,username:string,password:string,email:string,DiaChi:string,GioiTinh:string,NgaySinh:Date,SoDienThoai:string,TrangThai:string,MaChucVu:string){
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
  getDSnganh(){
    return this.http.get(this.rootUrl + '/api/dsnganhhoc').map(res=>res.json().response);
  }
  addNganh(MaNH:string,TenNH:string,MoTa:string){
    const data = {"MaNH" : MaNH,
    "TenNH" : TenNH,
    "MoTa" : MoTa};
    return this.http.post(this.rootUrl + '/api/themnganh',data).map(res=>res.json().response);
  }
  suaNganh(MaNH:string,TenNH:string,MoTa:string){
    const data = {"MaNH" : MaNH,
    "TenNH" : TenNH,
    "MoTa" : MoTa};
    return this.http.post(this.rootUrl + '/api/suanganh',data).map(res=>res.json().response);
  }
  xoaNganh(MaNH:string){
    const data = {"MaNH" : MaNH};
    return this.http.post(this.rootUrl + '/api/xoanganh',data).map(res=>res.json().response);
  }
  getDsTruong(){
    return this.http.get(this.rootUrl + '/api/dstruong').map(res=>res.json().response);
  }
}
