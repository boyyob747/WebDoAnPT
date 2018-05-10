import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { QluserService } from '../qluser.service';

@Component({
  selector: 'app-thong-ke',
  templateUrl: './thong-ke.component.html',
  styleUrls: ['./thong-ke.component.scss']
})
export class ThongKeComponent implements OnInit {
  displayedColumns = ["ID","KhuVucLV","SoLuong","TiLe"];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private nam:string;
  private choosethongke:string;
  private dang:string;
  private isError = false;
  private tongSoSvDaLam:number;
  private thongkes:Thongke[];
  dataSource = new MatTableDataSource(this.thongkes);
  private isHideTable = true;
  private isdang:any;
  public titleKucVucViecLam: string[] = [
    'Số lượng sinh viên làm việc trong khu vực nhà nước',
    'Số lượng sinh viên làm việc trong khu vực tư nhân',
    'Số lượng sinh viên làm việc trong liên doanh nước ngoài',
    'Số lượng sinh viên tự tạo việc làm'
];
public doughnutChartLabels: string[];
public doughnutChartData:number[];
public doughnutChartType: string = 'doughnut';
public barChartOptions: any = {
  scaleShowVerticalLines: false,
  responsive: true
};
public barChartLabels: string[] = [
  '2015',
  '2016',
  '2017',
  '2018'
];
public barChartType: string = 'bar';
public barChartLegend: boolean = true;

public barChartData: any[] = [
  { data: [65, 59, 80, 81], label: 'SV làm việc trong khu vực nhà nước' },
  { data: [11, 44, 22, 77], label: 'SV làm việc trong khu vực tư nhân' },
  { data: [44, 11, 22, 33], label: 'SV làm việc trong liên doanh nước ngoài' },
  { data: [44, 11, 15, 44], label: 'SV tự tạo việc làm' } 
];
  constructor(private dataService:QluserService) { }

  ngOnInit() {
    
  }
  xem(){
    if (this.nam == "" || this.nam == null){
      this.isError = true;
      return;
    }
    this.isError = false;
    if(this.dang == "0"){
      this.isHideTable = false;
    }else{
      this.isHideTable = true;
    }
    this.isdang = this.dang;
    switch(this.choosethongke) { 
      case "0": { 
        this.dataService.thoneketinhtrangvieclamsv().subscribe(
          res=>{
         this.thongke_khuvuc_lv([
          'Số lượng sinh viên có việc làm',
          'Số lượng sinh viên chưa có việc làm',
          'Số lượng sinh viên học lên'
        ],res);
        });
         break; 
      } 
      case "1": { 
        this.dataService.thongkekucvucvieclamsv().subscribe(
          res=>{
         this.thongke_khuvuc_lv([
          'Số lượng sinh viên làm việc trong khu vực nhà nước',
          'Số lượng sinh viên làm việc trong khu vực tư nhân',
          'Số lượng sinh viên làm việc trong liên doanh nước ngoài',
          'Số lượng sinh viên tự tạo việc làm'
        ],res);
        });
         break; 
      } 
      case "2": { 
        this.dataService.thonekelamdungnganh().subscribe(
          res=>{
         this.thongke_khuvuc_lv([
          'Số lượng sinh viên làm việc đúng ngành',
          'Số lượng sinh viên làm việc không đúng ngành'
        ],res);
        });
         break; 
      } 
      case "3": { 
        this.dataService.thonekemucluong().subscribe(
          res=>{
         this.thongke_khuvuc_lv([
          'Số lượng sinh viên có mức lương dưới 5 triệu',
          'Số lượng sinh viên có mức lương từ 5 đến 10 triệu',
          'Số lượng sinh viên có mức lương trên 10 triệu'
        ],res);
        });
         break; 
      } 
      case "4": { 
        this.dataService.thonekethoigiancoviec().subscribe(
          res=>{
         this.thongke_khuvuc_lv([
          'Số lượng sinh viên có việc dưới 3 tháng',
          'Số lượng sinh viên có việc từ 3 đến 6 tháng',
          'Số lượng sinh viên có việc từ 6 tháng đến 1 năm',
          'Số lượng sinh viên có việc trên 1 năm'
        ],res);
        });
         break; 
      } 
      default: { 
        this.isError = true;
        this.isdang = -1;
         break; 
      } 
   } 
  }
  thongke_khuvuc_lv(charlabel:any,res:any){
    this.doughnutChartLabels = charlabel;
    var ChartData:number[] = new Array(this.doughnutChartLabels.length);
    this.thongkes = new Array(this.doughnutChartLabels.length + 1);
        var thongkeTongSos = res;
        var sum_soluong:number = 0;
        var sum_ti_le:number = 0;
        console.log("thongkeTongSos.length = " + thongkeTongSos.length);
        var index = 0;
        for(let i = 0 ; i < thongkeTongSos.length ; i ++){
            if (i == 0 ){
              this.tongSoSvDaLam = thongkeTongSos[i].TongSo;
            }else{
              var soLuong = thongkeTongSos[i].TongSo;
              var tile = this.round((Number(soLuong)/this.tongSoSvDaLam)*100,2);
              ChartData[index] = tile;
              this.thongkes[index] = {
                ID: index,
                KhuVucLV: this.doughnutChartLabels[index],
                SoLuong: soLuong,
                TiLe: tile
              }; 
              sum_ti_le = sum_ti_le + tile;
              sum_soluong = sum_soluong + soLuong;
              index = index + 1;
            }
            if ((i+1) == thongkeTongSos.length){
              this.thongkes[index] = {
                ID: '',
                KhuVucLV: "",
                SoLuong: sum_soluong,
                TiLe: sum_ti_le,
              }; 
              this.dataSource = new MatTableDataSource(this.thongkes);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
              this.doughnutChartData = ChartData;
            }
        }
     
  }
  thongke_khuvuc_lamviec(){
    this.doughnutChartLabels = this.titleKucVucViecLam;
    this.doughnutChartData = new Array(this.doughnutChartLabels.length);
    this.dataService.thongsosvdalamviec().subscribe(
      res=>{
          this.tongSoSvDaLam = res[0].TongSo;
          var i = 0;
          var sum_soluong:number = 0;
          var sum_ti_le:number = 0;
          this.dataService.svlamtainhanuoc().subscribe(
            res=>{
              var soLuong = res[0].TongSo;
              var tile = this.round((Number(soLuong)/this.tongSoSvDaLam)*100,2);
              this.doughnutChartData[i] = tile;
              this.thongkes[i] = {
                ID: i,
                KhuVucLV: "Số lượng sinh viên làm việc trong khu vực nhà nước",
                SoLuong: soLuong,
                TiLe: tile
              }; 
              sum_ti_le = sum_ti_le + tile;
              sum_soluong = sum_soluong + soLuong;
              i = i + 1;
              this.dataService.svlmtunhan().subscribe(
                res=>{
                  var soLuong = res[0].TongSo;
                  var tile = this.round((Number(soLuong)/this.tongSoSvDaLam)*100,2);
                  this.doughnutChartData[i] = tile;
                  sum_ti_le = sum_ti_le + tile;
                  sum_soluong = sum_soluong + soLuong;
                  this.thongkes[i] = {
                    ID: i,
                    KhuVucLV: "Số lượng sinh viên làm việc trong khu vực tư nhân",
                    SoLuong: soLuong,
                    TiLe: tile
                  }; 
                  i = i + 1;
                  this.dataService.svlmnuocngoai().subscribe(
                    res=>{
                      var soLuong = res[0].TongSo;
                      sum_soluong = sum_soluong + soLuong;
                      var tile = this.round((Number(soLuong)/this.tongSoSvDaLam)*100,2);
                      this.doughnutChartData[i] = tile;
                      sum_ti_le = sum_ti_le + tile;
                      this.thongkes[i] = {
                        ID: i,
                        KhuVucLV: "Số lượng sinh viên làm việc trong liên doanh nước ngoài",
                        SoLuong: soLuong,
                        TiLe: tile
                      }; 
                      i = i + 1;
                      this.dataService.svtutaoviec().subscribe(
                        res=>{
                          var soLuong = res[0].TongSo;
                          sum_soluong = sum_soluong + soLuong;
                          var tile = this.round((Number(soLuong)/this.tongSoSvDaLam)*100,2);
                          this.doughnutChartData[i] = tile;
                          sum_ti_le = sum_ti_le + tile;
                          this.thongkes[i] = {
                            ID: i,
                            KhuVucLV: "Số lượng sinh viên tự tạo việc làm",
                            SoLuong: soLuong,
                            TiLe: tile
                          }; 
                          i = i + 1;
                          this.thongkes[i] = {
                            ID: '',
                            KhuVucLV: "",
                            SoLuong: sum_soluong,
                            TiLe: sum_ti_le,
                          }; 
                          this.dataSource = new MatTableDataSource(this.thongkes);
                          this.dataSource.paginator = this.paginator;
                          this.dataSource.sort = this.sort;
                      });
                  });
              });
          });  
      });
  }

  round(number, precision) {
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
  };
}
interface Thongke {
  ID: any;
  KhuVucLV: any;
  SoLuong: any;
  TiLe: number;
}