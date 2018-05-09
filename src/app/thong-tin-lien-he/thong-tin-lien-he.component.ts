import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QluserService } from '../qluser.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-thong-tin-lien-he',
  templateUrl: './thong-tin-lien-he.component.html',
  styleUrls: ['./thong-tin-lien-he.component.scss']
})
export class ThongTinLienHeComponent implements OnInit {
  private MaLienHe:string;
  private HoTen:string;
  private Email:string;
  private ChuDe:string;
  private NoiDung:string;
  constructor(private dataService:QluserService,private router:Router,private route: ActivatedRoute,private location: Location) { }

  ngOnInit() {
    this.onLoad();
  }
  onLoad(){
    if (this.route.snapshot.paramMap.get('MaLienHe') != null){
      this.MaLienHe = this.route.snapshot.paramMap.get('MaLienHe');
      this.dataService.getlienhe(this.MaLienHe).subscribe(
        res=>{
          var lienhe = res[0];
          this.HoTen= lienhe.HoTen;
          this.Email= lienhe.Email;
          this.ChuDe= lienhe.ChuDe;
          this.NoiDung= lienhe.NoiDung;
      });
    }
    
  }
  goBack() {
    this.location.back();
  }
  onClickDeleteLienHe(id:any){
    this.dataService.xoaLienhe(id).subscribe(
      res=>{
        this.router.navigateByUrl('/qllienhe');
    });
  }
}
