import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { QluserService } from '../qluser.service';

@Component({
  selector: 'app-ds-line-he',
  templateUrl: './ds-line-he.component.html',
  styleUrls: ['./ds-line-he.component.scss']
})
export class DsLineHeComponent implements OnInit {

  private lienhes:Lienhe[];
  public loading = false;
  dataSource = new MatTableDataSource(this.lienhes);
  displayedColumns = ["MaLienHe","HoTen","Email","ChuDe","thaotac"];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private dataService:QluserService) { 
    this.onLoad();
  }
  onLoad(){
    this.loading = true;
      this.dataService.getdslienhe().subscribe(
        res=>{
          this.loading = false;
          this.lienhes = res;
          this.dataSource = new MatTableDataSource(this.lienhes);
          this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
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