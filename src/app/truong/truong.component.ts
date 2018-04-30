import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { QluserService } from '../qluser.service';

@Component({
  selector: 'app-truong',
  templateUrl: './truong.component.html',
  styleUrls: ['./truong.component.scss']
})
export class TruongComponent implements OnInit {
  private truongs:Truong[];
  dataSource = new MatTableDataSource(this.truongs);
  displayedColumns = ["MaTruong","TenTruong","Logo","NamThanhLap","DiaChi","thaotac"];
  constructor(private dataService:QluserService) { 
    this.onLoad();
  }
  onLoad(){
      this.dataService.getDsTruong().subscribe(
        res=>{
          this.truongs = res;
          this.dataSource = new MatTableDataSource(this.truongs);
        });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ngOnInit() {
  }

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
interface Nganh {
  MaNH: number;
  TenNH: string;
  MoTa: string;
}