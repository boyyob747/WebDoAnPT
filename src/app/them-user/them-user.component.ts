import { Component, OnInit } from '@angular/core';
import { QluserService } from '../qluser.service';
import { Router, ActivatedRoute } from '@angular/router';
import {FormControl} from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-them-user',
  templateUrl: './them-user.component.html',
  styleUrls: ['./them-user.component.scss']
})
export class ThemUserComponent implements OnInit {
  private lastID:any;
  private user:User;
  private chucvus:Chucvu;
  private name:string;
  private GioiTinh:any;
  private username:string;
  private MaChucVu:string;
  private email:string;
  private DiaChi:string;
  private password:string;
  private selected:any;
  private NgaySinh:any;
  private SoDienThoai:string;
  private UserID:any;
  private isUpdate = false;
  constructor(private dataService:QluserService,private router:Router,private route: ActivatedRoute,private location: Location){
    this.onLoad();
  }
  ngOnInit() {

  }
  onLoad(){
      this.dataService.getChucVu().subscribe(
        res=>{
          this.chucvus = res;
          // if (res != null){
          //   this.MaChucVu = res[0].MaCV;
          // }
          if (this.route.snapshot.paramMap.get('UserID') != null){
            this.UserID = this.route.snapshot.paramMap.get('UserID');
            this.dataService.getUserByID(this.UserID).subscribe(
              res=>{
                this.user = res[0];
                console.log(this.user.name);
                this.username = this.user.username;
                this.name = this.user.name;
                this.NgaySinh = this.user.NgaySinh;
                this.MaChucVu = this.user.MaChucVu;
                this.email = this.user.email;
                this.SoDienThoai = this.user.SoDienThoai;
                this.DiaChi = this.user.DiaChi;
                this.isUpdate = true;
                this.password = this.user.password;
                this.GioiTinh = this.user.GioiTinh;
              });
          }else{
            this.dataService.getLastUserID().subscribe(
              res=>{
                this.UserID = res[0].lastID + 1;
              });
          }
        });
    
  }
  goBack() {
    this.location.back();
  }
  onClickDeleteUser(id:any){
    this.dataService.deleteUser(id).subscribe(
      res=>{
        this.router.navigateByUrl('/danhsachuser');
    });
  }

  onLamMoi(){
    this.username = null;
    this.name = null;
    this.NgaySinh = null;
    this.MaChucVu = null;
    this.email = null;
    this.SoDienThoai = null;
    this.DiaChi = null;
    this.isUpdate = null;
    this.password = null;
    this.GioiTinh = null;
  }
  onAddUser(){
    if (this.isUpdate){
      this.dataService.updateUser(this.UserID,this.name,this.username,this.password,this.email,this.DiaChi,this.GioiTinh,this.NgaySinh,this.SoDienThoai,this.MaChucVu).subscribe(
        res=>{
           this.router.navigateByUrl('/danhsachuser');
        }
      );
    }else{
      this.dataService.addUser(this.name,this.username,this.password,this.email,this.DiaChi,this.GioiTinh,this.NgaySinh,this.SoDienThoai,"1",this.MaChucVu).subscribe(
        res=>{
           this.router.navigateByUrl('/danhsachuser');
        }
      );
    }
    
  }
}
interface Chucvu {
  MaCV: number;
  TenCV: string;
}
interface User {
  UserID: number;
  name: string;
  username: string;
  email: string;
  password :string;
  GioiTinh: number;
  NgaySinh: string;
  TrangThai: number;
  SoDienThoai : string;
  MaChucVu : any;
  DiaChi : string;
}