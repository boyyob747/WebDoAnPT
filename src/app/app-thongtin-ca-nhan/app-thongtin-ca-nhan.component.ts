import { Component, OnInit } from '@angular/core';
import { QluserService } from '../qluser.service';

@Component({
  selector: 'app-app-thongtin-ca-nhan',
  templateUrl: './app-thongtin-ca-nhan.component.html',
  styleUrls: ['./app-thongtin-ca-nhan.component.scss']
})
export class AppThongtinCaNhanComponent implements OnInit {

  public mUsername = "";
  private thongtinCaNhan:ThongtinCaNhan = null;
  public loading = false;
  constructor(private dataService:QluserService){
    this.onLoad();
  }
  onLoad(){
    const userId = localStorage.getItem('userId');
    this.loading = true;
    this.dataService.getThongtinCaNhan(userId).subscribe(
      res=>{
        this.thongtinCaNhan = res[0];
        this.loading = false;
        console.log("this.thongtinCaNhan" + this.thongtinCaNhan.UserID);
      });
  }
  ngOnInit() {
    this.mUsername = localStorage.getItem('mUsername');
  }
}
interface ThongtinCaNhan {
        UserID: number;
        name: string;
        username: string;
        email: string;
        DiaChi: string;
        GioiTinh: number;
        NgaySinh: Date;
        SoDienThoai: string;
        TrangThai: number;
        TenCV: string;
}
