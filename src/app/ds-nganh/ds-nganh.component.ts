import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { QluserService } from '../qluser.service';

@Component({
  selector: 'app-ds-nganh',
  templateUrl: './ds-nganh.component.html',
  styleUrls: ['./ds-nganh.component.scss']
})
export class DsNganhComponent implements OnInit {
  private nganhs:Nganh[];
  private truongs:Truong[];
  private MaTruong:string;
  dataSource = new MatTableDataSource(this.nganhs);
  displayedColumns = ["MaNH","TenNH","thaotac"];
  constructor(private dataService:QluserService) { 
    this.nganhs = null;
    this.onLoad();
  }
  onLoad(){
    this.dataService.getDSnganh().subscribe(
      res=>{
        this.nganhs = res;
        this.dataSource = new MatTableDataSource(this.nganhs);
      });
      this.dataService.getDsTruong().subscribe(
        res=>{
          this.truongs = res;
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
}
interface Nganh {
  MaNH: number;
  TenNH: string;
  MoTa: string;
}