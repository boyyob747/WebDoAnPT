import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { QluserService } from '../qluser.service';

@Component({
  selector: 'app-ds-line-he',
  templateUrl: './ds-line-he.component.html',
  styleUrls: ['./ds-line-he.component.scss']
})
export class DsLineHeComponent implements OnInit {

  private lienhes:Lienhe[];
  dataSource = new MatTableDataSource(this.lienhes);
  displayedColumns = ["MaLienHe","HoTen","Email","ChuDe","thaotac"];
  constructor(private dataService:QluserService) { 
    this.onLoad();
  }
  onLoad(){
      this.dataService.getdslienhe().subscribe(
        res=>{
          this.lienhes = res;
          this.dataSource = new MatTableDataSource(this.lienhes);
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
interface Lienhe {
  MaLienHe: number;
  HoTen: string;
  Email: string;
  ChuDe: string;
  NoiDung?: any;
  created_at?: any;
  updated_at?: any;
}