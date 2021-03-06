import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { AppLoginComponent } from '../../app-login/app-login.component';
import { AppThongtinCaNhanComponent } from '../../app-thongtin-ca-nhan/app-thongtin-ca-nhan.component';
import { DanhSachUsersComponent } from '../../danh-sach-users/danh-sach-users.component';
import { ThemUserComponent } from '../../them-user/them-user.component';
import { PhieukhaosatComponent } from '../../phieukhaosat/phieukhaosat.component';
import { KetQuaKhaoSatComponent } from '../../ket-qua-khao-sat/ket-qua-khao-sat.component';
import { ThemSinhvienComponent } from '../../them-sinhvien/them-sinhvien.component';
import { ThemDsSinhvienComponent } from '../../them-ds-sinhvien/them-ds-sinhvien.component';
import { TruongComponent } from '../../truong/truong.component';
import { ThemTruongComponent } from '../../them-truong/them-truong.component';
import { DsNganhComponent } from '../../ds-nganh/ds-nganh.component';
import { ThemNganhComponent } from '../../them-nganh/them-nganh.component';
import { ThongKeComponent } from '../../thong-ke/thong-ke.component';
import { BaoCaoComponent } from '../../bao-cao/bao-cao.component';
import { DsSinhvienComponent } from '../../ds-sinhvien/ds-sinhvien.component';
import { DsLineHeComponent } from '../../ds-line-he/ds-line-he.component';
import { TrangchuComponent } from '../../trangchu/trangchu.component';
import { LienHeComponent } from '../../lien-he/lien-he.component';
import { ThucHienKhaoSatComponent } from '../../thuc-hien-khao-sat/thuc-hien-khao-sat.component';
import { ThongTinLienHeComponent } from '../../thong-tin-lien-he/thong-tin-lien-he.component';
import { TraLienLienHeComponent } from '../../tra-lien-lien-he/tra-lien-lien-he.component';
export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'login',        component: AppLoginComponent },
    { path: 'thongtincanhan',        component: AppThongtinCaNhanComponent },
    { path : 'danhsachuser' , component : DanhSachUsersComponent},
    { path : 'themuser' , component : ThemUserComponent},
    { path : 'phieukhaosat' , component : PhieukhaosatComponent},
    { path : 'ketquakhaosat' , component : KetQuaKhaoSatComponent},
    { path : 'dssv' , component : DsSinhvienComponent},
    { path : 'themsv' , component : ThemSinhvienComponent},
    { path : 'themdssv' , component : ThemDsSinhvienComponent},
    { path : 'danhtruong' , component : TruongComponent},
    { path : 'themtruong' , component : ThemTruongComponent},
    { path : 'danhnganh' , component : DsNganhComponent},
    { path : 'themnganh' , component : ThemNganhComponent},
    { path : 'thongke' , component : ThongKeComponent},
    { path : 'baocao' , component : BaoCaoComponent},
    {path : 'qllienhe', component : DsLineHeComponent},
    { path : 'trangchu' , component : TrangchuComponent},
    { path : 'thuchienkhaosat' , component : ThucHienKhaoSatComponent},
    {path : 'lienhe', component : LienHeComponent},{path : 'thongtinlienhe', component : ThongTinLienHeComponent},{path : 'traloithongtin', component : TraLienLienHeComponent},
];
