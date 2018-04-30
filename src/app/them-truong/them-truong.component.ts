import { Component, OnInit } from '@angular/core';
import { QluserService } from '../qluser.service';

@Component({
  selector: 'app-them-truong',
  templateUrl: './them-truong.component.html',
  styleUrls: ['./them-truong.component.scss']
})
export class ThemTruongComponent implements OnInit {
  private nganhs:Nganh[];
  constructor(private dataService:QluserService) { }

  ngOnInit() {
    this.onLoad();
  }
  onLoad(){
    this.dataService.getDSnganh().subscribe(
      res=>{
        this.nganhs = res;
      });
  }
}
interface Nganh {
  MaNH: number;
  TenNH: string;
  MoTa: string;
}