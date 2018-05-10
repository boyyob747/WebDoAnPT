import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { QluserService } from '../qluser.service';

@Component({
  selector: 'app-ket-qua-khao-sat',
  templateUrl: './ket-qua-khao-sat.component.html',
  styleUrls: ['./ket-qua-khao-sat.component.scss']
})
export class KetQuaKhaoSatComponent implements OnInit {
  displayedColumns = ["MaPKQKS","TenSV","MaSV","GioiTinh"]; //,"thaotac"
  textColumns = ["ID","tên","MSSV","Giới tính"]; //,"Thao tác"
  private timkiem:string;
  private sortby:any;
  private phieuKQs:PhieuKQ[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private dataService:QluserService) { }

  ngOnInit() {
    this.onLoad();
  }
  onLoad(){
    this.dataService.getKetQuaKhaoSat().subscribe(
      res=>{
        console.log(res);
        this.phieuKQs = res;
        var i = 0 ;
        for(let phieukq in this.phieuKQs){
          
          var cautralois = this.phieuKQs[0].CauTraLoi.split(",");
          if (i == 0){
            var cauhois = this.phieuKQs[0].CauHoi.split(",");
            for (let i = 0 ; i < cauhois.length ; i++){
              this.displayedColumns.push('' + i);
              this.textColumns.push(cauhois[i]);
              console.log(cauhois[i]);
            }
            i = i + 1;
          }
          
        }
        

    });
  }
}
interface PhieuKQ {
  MaPKQKS: number;
  ThoiGianNopKS: string;
  MaSV: number;
  TenSV: string;
  GioiTinh: number;
  TenTruong: string;
  TenNH: string;
  CauHoi: string;
  CauTraLoi: string;
}