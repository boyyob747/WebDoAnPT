import { Component, OnInit } from '@angular/core';
import { QluserService } from '../qluser.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import swal from 'sweetalert2';
@Component({
  selector: 'app-tra-lien-lien-he',
  templateUrl: './tra-lien-lien-he.component.html',
  styleUrls: ['./tra-lien-lien-he.component.scss']
})
export class TraLienLienHeComponent implements OnInit {
  private MaLienHe:string;
  private NoiDung:string;
  private Email:string;
  private ChuDe:string;
  public loading = false;
  constructor(private dataService:QluserService,private router:Router,private route: ActivatedRoute,private location: Location) { }

  ngOnInit() {
    this.loading = true;
    if (this.route.snapshot.paramMap.get('MaLienHe') != null){
      this.MaLienHe = this.route.snapshot.paramMap.get('MaLienHe');
      this.dataService.getlienhe(this.MaLienHe).subscribe(
        res=>{
          console.log(res);
          var lienhe = res[0];
          this.Email= lienhe.Email;
          this.ChuDe= lienhe.ChuDe;
          this.loading = false;
      });
    }
  }
  goBack() {
    this.location.back();
  }
  onTraloi(){
    this.loading = true;
    this.dataService.traloithongtin(this.Email,this.ChuDe,this.NoiDung).subscribe(
      res=>{
        this.loading = false;
        swal({
          title: 'Trả lời thành công!',
          text: 'Đã gửi email cho ' + this.Email,
          type: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigateByUrl('/qllienhe');
        });
    });
  }

}
