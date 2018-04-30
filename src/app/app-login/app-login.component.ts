import { Component, OnInit } from '@angular/core';
import { QluserService } from '../qluser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit {

  constructor(private dataService:QluserService,public router: Router) {}
  isLoginError:boolean = false;
  private result:Array<any>;
  private mUsername:string;
  private mPassword:string;
  ngOnInit() {}

  onClickLogin(){
      this.dataService.doLogin(this.mUsername,this.mPassword).subscribe(
        res=>{
          console.log(res);
          const isCanLogin = res[0].isCanLogin;
          const userId = res[0].UserID;
          const MaChucVu = res[0].MaChucVu;
          if (isCanLogin == 1){
            localStorage.setItem('isLogined','true');
            localStorage.setItem('mUsername',this.mUsername);
            localStorage.setItem('userId',userId);
            localStorage.setItem('MaChucVu',MaChucVu);
            window.location.href = '/thongtincanhan';
          }else{
            this.isLoginError = true;
          }
        }
      );
    }

}
