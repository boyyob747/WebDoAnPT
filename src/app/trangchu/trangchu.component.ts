import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { QluserService } from '../qluser.service';
@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.scss']
})
export class TrangchuComponent implements OnInit {
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
  public doughnutChartLabels: string[] = [
    'Số lượng sinh viên làm việc trong khu vực nhà nước',
    'Số lượng sinh viên làm việc trong khu vực tư nhân',
    'Số lượng sinh viên làm việc trong liên doanh nước ngoài',
    'Số lượng sinh viên tự tạo việc làm'
  ];
  public doughnutChartData:number[] = [30.91,12.69,15.62,0.79];
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
  private TieuDe:string;
  private MoTa:string;
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
        this.xem();
    }
    xem(){
        this.TieuDe = "Thống kê tình hình việc làm của sinh viên tốt nghiệp năm 2018";
        this.MoTa = "Về khu vực làm việc của sinh viên sau tốt nghiệp";
          this.dataService.thongkekucvucvieclamsv().subscribe(
            res=>{
           this.thongke_khuvuc_lv([
            'Số lượng sinh viên làm việc trong khu vực nhà nước',
            'Số lượng sinh viên làm việc trong khu vực tư nhân',
            'Số lượng sinh viên làm việc trong liên doanh nước ngoài',
            'Số lượng sinh viên tự tạo việc làm'
          ],res);
          });
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
                console.log("this.doughnutChartData = " + this.doughnutChartData);
              }
          }
       
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