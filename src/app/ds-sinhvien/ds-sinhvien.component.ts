import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
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
  constructor(private dataService:QluserService){
    this.sinhviens = null;
    this.onLoad();
  }
  onLoad(){
    this.dataService.getSinhvien().subscribe(
      res=>{
        console.log(res);
        this.sinhviens = res;
        this.dataSource = new MatTableDataSource(this.sinhviens);
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