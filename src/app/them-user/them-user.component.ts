import { Component, OnInit } from '@angular/core';
import { QluserService } from '../qluser.service';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';
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
  private GioiTinh:string;
  private username:string;
  private MaChucVu:string;
  private email:string;
  private DiaChi:string;
  private password:string;
  private selected:any;
  private NgaySinh:any;
  private SoDienThoai:string;
  constructor(private dataService:QluserService,private router:Router){
    this.onLoad();
  }
  ngOnInit() {
    this.user = {
      UserID: 1,
      name: '',
      username: '',
      email: '',
      password :'',
      GioiTinh: 1,
      NgaySinh: '',
      TrangThai: 1,
      SoDienThoai : '',
      MaChucVu : -1,
      DiaChi : '',
    };
  }
  onLoad(){
    this.dataService.getLastUserID().subscribe(
      res=>{
        this.lastID = res[0].lastID + 1;
      });
      this.dataService.getChucVu().subscribe(
        res=>{
          this.chucvus = res;
          if (res != null){
            this.MaChucVu = res[0].MaCV;
          }
        });
  }
  onAddUser(){
    console.log("this.NgaySinh = " + this.NgaySinh);
    // this.dataService.addUser(this.name,this.username,this.password,this.email,this.DiaChi,this.GioiTinh,this.NgaySinh,this.SoDienThoai,"1",this.MaChucVu).subscribe(
    //   res=>{
    //      this.router.navigateByUrl('/danhsachuser');
    //   }
    // );
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
  MaChucVu : number;
  DiaChi : string;
}