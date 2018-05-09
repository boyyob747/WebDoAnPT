import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { QluserService } from '../qluser.service';

@Component({
  selector: 'app-ds-nganh',
  templateUrl: './ds-nganh.component.html',
  styleUrls: ['./ds-nganh.component.scss']
})
export class DsNganhComponent implements OnInit {
  private nganhs:Nganh[];
  private truongs:Truong[];
  private MaTruong:any;
  private nganhTruongs:Nganhtruong[];
  dataSource = new MatTableDataSource(this.nganhs);
  displayedColumns = ["MaNH","TenNH","thaotac"];
  private timkiem:string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public loading = false;
  constructor(private dataService:QluserService) { 
    this.nganhs = null;
    this.onLoad();
  }
  onLoad(){
    // this.dataService.getDSnganh().subscribe(
    //   res=>{
    //     this.nganhs = res;
    //     this.dataSource = new MatTableDataSource(this.nganhs);
    //   });
    this.loading = true;
      this.dataService.getDsTruong().subscribe(
        res=>{
          this.truongs = res;
          this.MaTruong = this.truongs[0].MaTruong;
          this.dataService.getNganhTruong().subscribe(
            res=>{
              this.loading = false;
              this.nganhTruongs = res;
              this.onSelectedTruong();
          });
        });
        
  }
  applyFilter() {
    this.timkiem = this.timkiem .trim(); // Remove whitespace
    this.timkiem  = this.timkiem .toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = this.timkiem ;
  }
  ngOnInit() {
  }
  onSelectedTruong(){
    this.nganhs = [];
    for (let nganhTruong of this.nganhTruongs) {
      if (nganhTruong.MaTruong === this.MaTruong){
        this.nganhs.push( {
          MaNH: nganhTruong.MaNganh,
          TenNH: nganhTruong.TenNH
        });
      }
    }
    this.dataSource = new MatTableDataSource(this.nganhs);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
interface Nganhtruong {
  MaTruong: number;
  TenTruong: string;
  MaNganh: number;
  TenNH: string;
  MaNH: number;
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
}