import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    subMenu: SubMenu [];
    iconArrow : string;
    showMenu: string;
    maChucVu : string;
}
interface SubMenu {
    path :string;
    title : string;
    
}
export const ROUTES: RouteInfo[] = [
    { path: '/thongtincanhan', title: 'Thông tin cá nhân',  icon: 'contact_mail', class: '' , subMenu : null ,iconArrow : 'keyboard_arrow_down',showMenu : '0',maChucVu : '1'},
    { path: '/quanlyuser', title: 'Quản lý users',  icon:'person', class: 'qluser' , 
    subMenu : [
        {path : '/danhsachuser',title : 'Danh sách user'},
        {path : '/themuser',title : 'Thêm user'}
    ] ,iconArrow : 'keyboard_arrow_down',showMenu : '0',maChucVu : '1'},
    { path: '', title: 'Quản lý khảo sát',  icon:'assignment', class: 'qlkhaosat' , 
    subMenu : [
        {path : '/phieukhaosat',title : 'Phiếu khảo sát'},
        {path : '/ketquakhaosat',title : 'Kết quả khảo sát'}
    ] ,iconArrow : 'keyboard_arrow_down',showMenu : '0',maChucVu : '1'},
    { path: '', title: 'Quản lý sinh viên',  icon:'portrait', class: 'qlsv' , 
    subMenu : [
        {path : '/dssv',title : 'Danh sách sinh viên'},
        {path : '/themsv',title : 'Thêm sinh viên'},
        {
            path : '/themdssv' , title : 'Thêm danh sách sinh viên'
        }
    ] ,iconArrow : 'keyboard_arrow_down',showMenu : '0',maChucVu : '1'},
    { path: '', title: 'Quản lý trường ',  icon:'account_balance', class: 'qltruong' , 
    subMenu : [
        {path : '/danhtruong',title : 'Danh trường '},
        {path : '/themtruong',title : 'Thêm trường'}
    ] ,iconArrow : 'keyboard_arrow_down',showMenu : '0',maChucVu : '1'},
    { path: '', title: 'Quản lý ngành',  icon:'work', class: 'qlngangh' , 
    subMenu : [
        {path : '/danhnganh',title : 'Danh ngành'},
        {path : '/themnganh',title : 'Thêm ngành'}
    ] ,iconArrow : 'keyboard_arrow_down',showMenu : '0',maChucVu : '1'},
    //
    { path: '/qllienhe', title: 'Quản lý liên hệ',  icon: 'link', class: 'qllienhe' , subMenu : null ,iconArrow : 'keyboard_arrow_down',showMenu : '0',maChucVu : '1'},
    { path: '/thongke', title: 'Thông kê',  icon: 'contact_mail', class: 'thongke' , subMenu : null ,iconArrow : 'keyboard_arrow_down',showMenu : '0',maChucVu : '1'},
    { path: '/baocao', title: 'Bao cáo',  icon: 'contact_mail', class: 'baocao' , subMenu : null ,iconArrow : 'keyboard_arrow_down',showMenu : '0',maChucVu : '1'},
];
export const ROUTES2: RouteInfo[] = [
    { path: '/thongtincanhan', title: 'Thông tin cá nhân',  icon: 'contact_mail', class: '' , subMenu : null ,iconArrow : 'keyboard_arrow_down',showMenu : '0',maChucVu : '1'},
    { path: '', title: 'Quản lý sinh viên',  icon:'portrait', class: 'qlsv' , 
    subMenu : [
        {path : '/dssv',title : 'Danh sách sinh viên'},
        {path : '/themsv',title : 'Thêm sinh viên'},
        {
            path : '/themdssv' , title : 'Thêm danh sách sinh viên'
        }
    ] ,iconArrow : 'keyboard_arrow_down',showMenu : '0',maChucVu : '1'},
    { path: '', title: 'Quản lý trường ',  icon:'account_balance', class: 'qltruong' , 
    subMenu : [
        {path : '/danhtruong',title : 'Danh trường '},
        {path : '/themtruong',title : 'Thêm trường'}
    ] ,iconArrow : 'keyboard_arrow_down',showMenu : '0',maChucVu : '1'},
    { path: '', title: 'Quản lý ngành',  icon:'work', class: 'qlngangh' , 
    subMenu : [
        {path : '/danhnganh',title : 'Danh ngành'},
        {path : '/themnganh',title : 'Thêm ngành'}
    ] ,iconArrow : 'keyboard_arrow_down',showMenu : '0',maChucVu : '1'},
    //
    { path: '/qllienhe', title: 'Quản lý liên hệ',  icon: 'link', class: 'qllienhe' , subMenu : null ,iconArrow : 'keyboard_arrow_down',showMenu : '0',maChucVu : '1'},
    { path: '/baocao', title: 'Bao cáo',  icon: 'contact_mail', class: 'baocao' , subMenu : null ,iconArrow : 'keyboard_arrow_down',showMenu : '0',maChucVu : '1'},
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  showMenu: string = '';
  iconMenu:string = 'keyboard_arrow_down';
  isActive: boolean = false;
  private MaChucVu:string = "-1";
  constructor() { }

  ngOnInit() {
   
    
    if (localStorage.getItem("MaChucVu") != null){
        this.MaChucVu = localStorage.getItem("MaChucVu");
        if (this.MaChucVu == "1"){
            this.menuItems = ROUTES.filter(menuItem => menuItem);
        }else if (this.MaChucVu == "2"){
            this.menuItems = ROUTES2.filter(menuItem => menuItem);
        }
    }
    console.log("this.MaChucVu = " + this.MaChucVu);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  addExpandClass(element: string , index : number ) {
      console.log("element = " + element);
      console.log("index = " + index);
      console.log("this.menuItems[index].class = " + this.menuItems[index].class);
      console.log("element === this.menuItems[index].class =  " + (element === this.menuItems[index].class));
    if (element == this.menuItems[index].showMenu) {
        this.menuItems[index].iconArrow = 'keyboard_arrow_down';
        this.menuItems[index].showMenu = '0';
    } else {
        this.menuItems[index].showMenu = element;
        this.menuItems[index].iconArrow  = 'keyboard_arrow_up';
    }
}
}
