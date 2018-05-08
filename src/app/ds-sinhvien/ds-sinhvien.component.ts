import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { QluserService } from '../qluser.service';

@Component({
  selector: 'app-ds-sinhvien',
  templateUrl: './ds-sinhvien.component.html',
  styleUrls: ['./ds-sinhvien.component.scss']
})
export class DsSinhvienComponent implements OnInit {
  private sinhviens:Sinhvien[];
  dataSource = new MatTableDataSource(this.sinhviens);
  displayedColumns = ["MaSV","TenSV","TenNganh","TenTruong","NgaySinh","GioiTinh","thaotac"];
  private timkiem:string;
  private sortby:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private dataService:QluserService){
    this.sinhviens = null;
    this.sortby = "MaSV";
    this.onLoad();
  }
  onLoad(){
    this.dataService.getSinhvienOrder(this.sortby).subscribe(
      res=>{
        console.log(res);
        this.sinhviens = res;
        this.dataSource = new MatTableDataSource(this.sinhviens);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
  applyFilter() {
    this.timkiem = this.timkiem .trim(); // Remove whitespace
    this.timkiem  = this.timkiem .toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = this.timkiem ;
  }
  ngOnInit() {
  }
  onSortBy(){
    this.onLoad();
  }
}
interface Sinhvien {
  MaSV: number;
  TenSV: string;
  TenTruong: string;
  TenNganh: string;
  GioiTinh: number;
  Email: string;
  NgaySinh: string;
  DienThoai: string;
  DiaChiThuongTru: string;
  DiaChiTamTru: string;
  idSV: string;
}