import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { QluserService } from '../qluser.service';

@Component({
  selector: 'app-danh-sach-users',
  templateUrl: './danh-sach-users.component.html',
  styleUrls: ['./danh-sach-users.component.scss']
})
export class DanhSachUsersComponent implements OnInit {

  private users:Users[];
  public loading = false;
  private username:string;
  dataSource = new MatTableDataSource(this.users);
  displayedColumns = ["UserID","username","email","NgaySinh","GioiTinh","TrangThai","thaotac"];
  constructor(private dataService:QluserService){
    this.users = null;
    this.onLoad();
  }
  onLoad(){
    this.loading = true;
    this.dataService.getUsers().subscribe(
      res=>{
        this.loading = false;
        this.users = res;
        this.dataSource = new MatTableDataSource(this.users);
      });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ngOnInit() {
  }
  setUsername(username:string){
    this.username = username;
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