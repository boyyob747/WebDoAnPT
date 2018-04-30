import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QluserService } from '../qluser.service';

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
  constructor(private dataService:QluserService,private router:Router) { }

  ngOnInit() {

  }
  onThemNganh(){
    this.dataService.addNganh(this.MaNH,this.TenNH,this.MoTa).subscribe(
      res=>{
         this.router.navigateByUrl('/danhnganh');
      }
    );
  }
}
