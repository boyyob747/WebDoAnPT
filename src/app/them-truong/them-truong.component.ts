import { Component, OnInit } from '@angular/core';
import { QluserService } from '../qluser.service';
import { NativeDateAdapter } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-them-truong',
  templateUrl: './them-truong.component.html',
  styleUrls: ['./them-truong.component.scss']
})
export class ThemTruongComponent implements OnInit {
  private nganhs:Nganh[];
  // ,private adapter:AppDateAdapter
  constructor(private dataService:QluserService,private router:Router,private route: ActivatedRoute,private location: Location) { }
  private ChooseNganh = [];
  private idTruong:string;
  private TenTruong:string;
  private DiaChi:string;
  private NamThanhLap:Date;
  private TamNhin:string;
  private SuMang:string;
  private GioiThieu:string;
  private Logo:string;
  private HieuTruong:string;
  private DienThoai:string;
  private maTruong:string;
  private isUpdate = false;
  private currentNganhs:any;
  ngOnInit() {
    this.onLoad();
  }
  onLoad(){
    this.dataService.getDSnganh().subscribe(
      res=>{
        this.nganhs = res;
        if (this.route.snapshot.paramMap.get('idTruong') != null){
          this.idTruong = this.route.snapshot.paramMap.get('idTruong');
          this.dataService.getTruong(this.idTruong).subscribe(
            res=>{
              console.log(res);
              var truong = res[0];
              this.isUpdate = true;
              this.TenTruong = truong.TenTruong;
              this.DiaChi = truong.DiaChi;
              this.NamThanhLap = truong.NamThanhLap;
              this.TamNhin = truong.TamNhin;
              this.SuMang = truong.SuMang;
              this.GioiThieu = truong.GioiThieu;
              this.HieuTruong = truong.HieuTruong;
              this.DienThoai = truong.DienThoai;
              this.maTruong = truong.MaTruong;
              this.dataService.getNganhTruongById(this.maTruong).subscribe(
                res=>{
                  var maNganh = [];
                  for(let nganhtruong of res){
                   //console.log("nganhtruong.MaNgan = "+ nganhtruong.MaNganh);
                   maNganh.push(nganhtruong.MaNganh);
                  }
                  this.ChooseNganh = maNganh;
              });
            });
        }
      });
  }
  onAddTruong(){
    if (this.isUpdate){
      this.dataService.suaTruong(this.maTruong,this.TenTruong,this.DiaChi
        ,this.NamThanhLap,this.TamNhin,this.SuMang
        ,this.GioiThieu,this.Logo,this.HieuTruong,this.DienThoai).subscribe(
        res=>{
          this.addNganhTruong();
      });
    }else{
      this.dataService.addTruong(this.idTruong,this.TenTruong,this.DiaChi
        ,this.NamThanhLap,this.TamNhin,this.SuMang
        ,this.GioiThieu,this.Logo,this.HieuTruong,this.DienThoai).subscribe(
        res=>{
          this.maTruong = res.insertId;
          this.addNganhTruong();
      });
    }
    
  }
  onLamMoi(){
    this.idTruong = null;
    this.TenTruong = null;
    this.DiaChi = null;
    this.NamThanhLap = null;
    this.TamNhin = null;
    this.SuMang = null;
    this.GioiThieu = null;
    this.HieuTruong = null;
    this.DienThoai = null;
  }
  goBack() {
    this.location.back();
  }
  onClickDeleteTruong(id:any){
    console.log(this.ChooseNganh);
    console.log(typeof(this.ChooseNganh));
    // this.dataService.xoaNganh(id).subscribe(
    //   res=>{
    //     this.router.navigateByUrl('/danhnganh');
    // });
  }
  addNganhTruong(){
    if (this.isUpdate){
      this.dataService.xoaNganhTruong(this.maTruong).subscribe(
        res=>{
          this.dataService.addNganhTruong(this.ChooseNganh,this.maTruong).subscribe(
            res=>{
              this.router.navigateByUrl('/danhtruong');
          });
      });
    }else{
      this.dataService.addNganhTruong(this.ChooseNganh,this.maTruong).subscribe(
        res=>{
          this.router.navigateByUrl('/danhtruong');
      });
    }
    
  }
}
interface Nganh {
  MaNH: number;
  TenNH: string;
  MoTa: string;
}
// class AppDateAdapter extends NativeDateAdapter {
//   parse(value: any): Date | null {
//       if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
//         const str = value.split('/');
//         const year = Number(str[2]);
//         const month = Number(str[1]) - 1;
//         const date = Number(str[0]);
//         return new Date(year, month, date);
//       }
//       const timestamp = typeof value === 'number' ? value : Date.parse(value);
//       return isNaN(timestamp) ? null : new Date(timestamp);
//     }
//  format(date: Date, displayFormat: Object): string {
//      if (displayFormat == "input") {
//          let day = date.getDate();
//          let month = date.getMonth() + 1;
//          let year = date.getFullYear();
//          return this._to2digit(day) + '/' + this._to2digit(month) + '/' + year;
//      } else {
//          return date.toDateString();
//      }
//  }

//  private _to2digit(n: number) {
//      return ('00' + n).slice(-2);
//  } 
// }