import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  menuItems: NbMenuItem[] = [{ title: 'home', link: '/' }, { title: 'dashboard', link: 'dashboard' }];
  constructor() { }

  ngOnInit() {
  }

}
