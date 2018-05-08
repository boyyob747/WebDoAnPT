import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { QluserService } from '../qluser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-danh-sach-users',
  templateUrl: './danh-sach-users.component.html',
  styleUrls: ['./danh-sach-users.component.scss']
})
export class DanhSachUsersComponent implements OnInit {

  private users:Users[];
  public loading = false;
  private username:string;
  private timkiem:string;
  private sortby:string;
  dataSource = new MatTableDataSource(this.users);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ["UserID","username","email","NgaySinh","GioiTinh","TrangThai","thaotac"];
  constructor(private dataService:QluserService,private router:Router){
    this.users = null;
    this.sortby = "name";
    this.onLoad();
  }
  ngAfterViewInit() {
    
  }
  onLoad(){
    this.loading = true;
    this.dataService.getAllUser(this.sortby).subscribe(
      res=>{
        this.loading = false;
        this.users = res;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
  applyFilter() {
    this.timkiem = this.timkiem .trim(); // Remove whitespace
    this.timkiem  = this.timkiem .toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = this.timkiem ;
  }
  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  ngOnInit() {
    
  }
  onSortBy(){
    this.onLoad();
  }
  setUsername(username:string){
    this.username = username;
  }

  onKhoa(id:any){
    this.dataService.khoaUser(id).subscribe(
      res=>{
        this.onLoad();
    });
  }
  onKickHoat(id:any){
    this.dataService.KichHoatUser(id).subscribe(
      res=>{
        this.onLoad();
    });
  }
}
interface Users {
  UserID: number;
  name: string;
  username: string;
  email: string;
  GioiTinh: number;
  NgaySinh: string;
  TrangThai: number;
}