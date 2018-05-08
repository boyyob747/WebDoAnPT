import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QluserService } from '../qluser.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lien-he',
  templateUrl: './lien-he.component.html',
  styleUrls: ['./lien-he.component.scss']
})
export class LienHeComponent implements OnInit {
  private HoTen:string;
  private Email:string;
  private ChuDe:string;
  private NoiDung:string;
  constructor(private dataService:QluserService,private router:Router) { }

  ngOnInit() {
  }
  onSendEmail(){
    this.dataService.sendLienHe(this.HoTen,this.Email,this.ChuDe,this.NoiDung).subscribe(
      res=>{
        swal({
          title: 'Gửi liên hệ thành công!',
          text: '',
          type: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
            location.href = "/lienhe";
        });
    });
  }
}
