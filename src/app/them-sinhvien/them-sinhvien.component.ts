import { Component, OnInit } from '@angular/core';
import { QluserService } from '../qluser.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
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
  private ngaySinh:any;
  private DienThoai:string;
  private DiaChiThuongTru:string;
  private DiaChiTamTru:string;
  private isUpdate = false;
  constructor(private dataService:QluserService,private router:Router,private route: ActivatedRoute,private location: Location) { }
  ngOnInit() {
    this.onLoad();
  }
  onLoad(){
      this.dataService.getDsTruong().subscribe(
        res=>{
          this.truongs = res;
          this.dataService.getNganhTruong().subscribe(
            res=>{
              this.nganhTruongs = res;
              if (this.route.snapshot.paramMap.get('MaSV') != null){
                this.MaSV = this.route.snapshot.paramMap.get('MaSV');
                this.dataService.getSV(this.MaSV).subscribe(
                  res=>{
                    var sinhvien = res[0];
                    this.isUpdate = true;
                    this.TenSV = sinhvien.TenSV;
                    this.ngaySinh = sinhvien.NgaySinh;
                    this.Email = sinhvien.Email;
                    this.DienThoai = sinhvien.DienThoai;
                    this.GioiTinh = sinhvien.GioiTinh;
                    this.maTruong = sinhvien.MaTruong;
                    this.onSelectedTruong();
                    this.Manganh = sinhvien.MaNganh;
                    this.DiaChiThuongTru = sinhvien.DiaChiThuongTru;
                    this.DiaChiTamTru = sinhvien.DiaChiTamTru;
                  });
              }
          });
        });
        
  }
  onAddSinhvien(){
    if (this.isUpdate){
      this.dataService.updateSinhvien(this.MaSV,this.TenSV,this.maTruong,this.Manganh,this.GioiTinh,this.
        Email,this.ngaySinh,this.DienThoai,this.DiaChiThuongTru,this.
        DiaChiTamTru).subscribe(
        res=>{
          this.router.navigateByUrl('/dssv');
        });
    }else{
      this.dataService.addSinhvien(this.MaSV,this.TenSV,this.maTruong,this.Manganh,this.GioiTinh,this.
        Email,this.ngaySinh,this.DienThoai,this.DiaChiThuongTru,this.
        DiaChiTamTru).subscribe(
        res=>{
          this.router.navigateByUrl('/dssv');
        });
    }
    
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
  goBack() {
    this.location.back();
  }
  onClickDeleteSinhvien(MaSV:string){
    this.dataService.deleteSinhvien(MaSV).subscribe(
      res=>{
        this.router.navigateByUrl('/dssv');
    });
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