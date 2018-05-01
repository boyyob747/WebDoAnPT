import { Component, OnInit } from '@angular/core';
import { QluserService } from '../qluser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-them-sinhvien',
  templateUrl: './them-sinhvien.component.html',
  styleUrls: ['./them-sinhvien.component.scss']
})
export class ThemSinhvienComponent implements OnInit {
  private nganhs:any[] = new Array();
  private truongs:Truong[];
  private isSelectedTruong = false;
  private maTruong:any;
  private nganhTruongs:Nganhtruong[];

  private MaSV:string;
  private TenSV:string;
  private Manganh:string;
  private GioiTinh:string;
  private Email:string;
  private ngaySinh:Date;
  private DienThoai:string;
  private DiaChiThuongTru:string;
  private DiaChiTamTru:string;

  constructor(private dataService:QluserService,private router:Router) { }
  ngOnInit() {
    this.onLoad();
  }
  onLoad(){
      this.dataService.getDsTruong().subscribe(
        res=>{
          this.truongs = res;
        });
        this.dataService.getNganhTruong().subscribe(
          res=>{
            this.nganhTruongs = res;
        });
  }
  onAddSinhvien(){
    this.dataService.addSinhvien(this.MaSV,this.TenSV,this.maTruong,this.Manganh,this.GioiTinh,this.
      Email,this.ngaySinh.toLocaleDateString(),this.DienThoai,this.DiaChiThuongTru,this.
      DiaChiTamTru).subscribe(
      res=>{
        this.router.navigateByUrl('/dssv');
      });
  }
  onSelectedTruong(){
    this.isSelectedTruong = true;
    this.nganhs = [];
    for (let nganhTruong of this.nganhTruongs) {
      if (nganhTruong.MaTruong === this.maTruong){
        this.nganhs.push( {
          MaNH: nganhTruong.MaNganh,
          TenNH: nganhTruong.TenNH
        });
      }
    }
  }
}
interface Nganh {
  MaNH: number;
  TenNH: string;
}
interface Nganhtruong {
  MaTruong: number;
  TenTruong: string;
  MaNganh: number;
  TenNH: string;
  MaNH: number;
}
interface Truong {
  MaTruong: number;
  TenTruong: string;
  DiaChi: string;
  NamThanhLap: string;
  TamNhin: string;
  SuMang: string;
  GioiThieu: string;
  Logo: string;
  HieuTruong: string;
  DienThoai: string;
  created_at?: any;
  updated_at?: any;
  idTruong:string;
}