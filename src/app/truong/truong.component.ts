import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { QluserService } from '../qluser.service';

@Component({
  selector: 'app-truong',
  templateUrl: './truong.component.html',
  styleUrls: ['./truong.component.scss']
})
export class TruongComponent implements OnInit {
  private truongs:Truong[];
  private nganhs:Nganh[];
  dataSource = new MatTableDataSource(this.truongs);
  displayedColumns = ["MaTruong","TenTruong","Logo","NamThanhLap","DiaChi","thaotac"];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private timkiem:string;
  private MaNH:any;
  constructor(private dataService:QluserService) { 
    this.onLoad();
  }
  onLoad(){
      this.dataService.getDsTruong().subscribe(
        res=>{
          this.truongs = res;
          this.dataSource = new MatTableDataSource(this.truongs);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
        this.dataService.getDSnganh().subscribe(
          res=>{
            this.nganhs = res;
          });
  }
  applyFilter() {
    this.timkiem = this.timkiem .trim(); // Remove whitespace
    this.timkiem  = this.timkiem .toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = this.timkiem ;
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