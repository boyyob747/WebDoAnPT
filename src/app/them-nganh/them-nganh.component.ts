import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QluserService } from '../qluser.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-them-nganh',
  templateUrl: './them-nganh.component.html',
  styleUrls: ['./them-nganh.component.scss']
})
export class ThemNganhComponent implements OnInit {
  private MaNH:string;
  private lastID:any;
  private TenNH:string;
  private MoTa:string;
  private isUpdate = false;
  constructor(private dataService:QluserService,private router:Router,private route: ActivatedRoute,private location: Location) { }

  ngOnInit() {
    this.onLoad();
  }
  onLoad(){
    if (this.route.snapshot.paramMap.get('MaNH') != null){
      this.MaNH = this.route.snapshot.paramMap.get('MaNH');
      this.dataService.getNganhByID(this.MaNH).subscribe(
        res=>{
          var nganh = res[0];
          this.TenNH = nganh.TenNH;
          this.MoTa = nganh.MoTa;
          this.isUpdate = true;
        });
    }
  }
  onLamMoi(){
    this.MaNH = "";
    this.TenNH = "";
    this.MoTa = "";
  }
  goBack() {
    this.location.back();
  }
  onClickDeleteNganh(id:any){
    this.dataService.xoaNganh(id).subscribe(
      res=>{
        this.router.navigateByUrl('/danhnganh');
    });
  }
  onThemNganh(){
    if (this.isUpdate){
      this.dataService.updateNganh(this.MaNH,this.TenNH,this.MoTa).subscribe(
        res=>{
           this.router.navigateByUrl('/danhnganh');
        }
      );
    }else{
      this.dataService.addNganh(this.MaNH,this.TenNH,this.MoTa).subscribe(
        res=>{
           this.router.navigateByUrl('/danhnganh');
        }
      );
    }
  }
}
