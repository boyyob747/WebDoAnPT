import { Component, OnInit } from '@angular/core';
import { QluserService } from '../qluser.service';
import { NativeDateAdapter } from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-them-truong',
  templateUrl: './them-truong.component.html',
  styleUrls: ['./them-truong.component.scss']
})
export class ThemTruongComponent implements OnInit {
  private nganhs:Nganh[];
  // ,private adapter:AppDateAdapter
  constructor(private dataService:QluserService,private router:Router) { }
  private ChooseNganh:any;
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
  ngOnInit() {
    this.onLoad();
  }
  onLoad(){
    this.dataService.getDSnganh().subscribe(
      res=>{
        this.nganhs = res;
      });
  }
  onAddTruong(){
    this.dataService.addTruong(this.idTruong,this.TenTruong,this.DiaChi
      ,this.NamThanhLap.toLocaleDateString(),this.TamNhin,this.SuMang
      ,this.GioiThieu,this.Logo,this.HieuTruong,this.DienThoai).subscribe(
      res=>{
        this.maTruong = res.insertId;
        this.addNganhTruong();
    });
  }
  addNganhTruong(){
    this.dataService.addNganhTruong(this.ChooseNganh,this.maTruong).subscribe(
      res=>{
        this.router.navigateByUrl('/danhtruong');
    });
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