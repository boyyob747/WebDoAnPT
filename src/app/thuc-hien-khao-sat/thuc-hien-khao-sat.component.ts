import { Component, OnInit } from '@angular/core';
import { QluserService } from '../qluser.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import swal from 'sweetalert2';
@Component({
  selector: 'app-thuc-hien-khao-sat',
  templateUrl: './thuc-hien-khao-sat.component.html',
  styleUrls: ['./thuc-hien-khao-sat.component.scss']
})
export class ThucHienKhaoSatComponent implements OnInit {
  private cauhois:Cauhoi[];
  private TieuDe:string;
  private MoTa:string;
  private MaPKS:string;
  private cautraloi:any[];
  private _options:any[];
  private isTraloi = false;
  private nganhs:any[] = new Array();
  private truongs:Truong[];
  private isSelectedTruong = false;
  private maTruong:any;
  private nganhTruongs:Nganhtruong[];
  private MaPKQKS:any;
  constructor(private dataService:QluserService,private router:Router,private route: ActivatedRoute,private location: Location) { }

  ngOnInit() {
    this.onLoad();
  }
  onLoad(){
    this.dataService.getAllPhieuKhaosat().subscribe(
      res=>{
        var phieukhao = res[0];
        this.TieuDe = phieukhao.TieuDe;
        this.MoTa = phieukhao.MoTa;
        this.MaPKS = phieukhao.MaPKS;
        console.log("phieukhao = " + phieukhao );
        this.dataService.getCauHoiById(this.MaPKS ).subscribe(
          res=>{
            this.cauhois = res;
            this.cautraloi = new Array(this.cauhois.length);
            this._options = new Array(this.cauhois.length);
            console.log(res);
            for(let i = 0 ; i < this.cauhois.length ; i++){
              this.dataService.getOption(this.cauhois[i].MaCH).subscribe(
                res=>{
                   this._options[i] = res; 
                   console.log(res);
                   console.log(" this._options[i] = " +  this._options[i]);
                });
            }
          });
      });
      this.dataService.getDsTruong().subscribe(
        res=>{
          this.truongs = res;
          this.dataService.getNganhTruong().subscribe(
            res=>{
              this.nganhTruongs = res;
          });
        });
      
  }
  onThemeThongtin(){
    var isfinish = false;
    this.dataService.themPhieuKQKhaoSat(this.MaPKS).subscribe(
      res=>{
        this.MaPKQKS = res.insertId;
        console.log("this.MaPKQKS = " + this.MaPKQKS );
        for (let i = 0 ; i < this.cautraloi.length ; i++){
          this.dataService.themThongTinDienKhatSat(this.MaPKQKS,this.cauhois[i].MaCH,this.cautraloi[i]).subscribe(
            res=>{
              if ((i+1) == this.cautraloi.length){
                this.isTraloi = true;
              }
            });
        }
      });
  }
  onSelectedTruong(maTruong:any){
    this.isSelectedTruong = true;
    this.nganhs = [];
    for (let nganhTruong of this.nganhTruongs) {
      if (nganhTruong.TenTruong === maTruong){
        this.nganhs.push( {
          MaNH: nganhTruong.MaNganh,
          TenNH: nganhTruong.TenNH
        });
      }
    }
  }
}
interface _Option {
  MaOption: number;
  NoiDungOption: string;
  MaCH: any;
  created_at?: any;
  updated_at?: any;
}
interface Cauhoi {
  MaCH: any;
  NoiDungCH: string;
  MaLCH: number;
  MaPKS: number;
  BatBuoc: string;
  created_at?: any;
  updated_at?: any;
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