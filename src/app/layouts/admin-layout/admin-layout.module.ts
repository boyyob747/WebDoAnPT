import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
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
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';
import { NbSidebarModule, NbLayoutModule } from '@nebular/theme';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { MaterialModule } from '../../material.module';
import { ThemUserComponent } from '../../them-user/them-user.component';
import { PhieukhaosatComponent } from '../../phieukhaosat/phieukhaosat.component';
import { KetQuaKhaoSatComponent } from '../../ket-qua-khao-sat/ket-qua-khao-sat.component';
import { DsSinhvienComponent } from '../../ds-sinhvien/ds-sinhvien.component';
import { ThemSinhvienComponent } from '../../them-sinhvien/them-sinhvien.component';
import { ThemDsSinhvienComponent } from '../../them-ds-sinhvien/them-ds-sinhvien.component';
import { TruongComponent } from '../../truong/truong.component';
import { ThemTruongComponent } from '../../them-truong/them-truong.component';
import { ThemNganhComponent } from '../../them-nganh/them-nganh.component';
import { DsNganhComponent } from '../../ds-nganh/ds-nganh.component';
import { ThongKeComponent } from '../../thong-ke/thong-ke.component';
import { BaoCaoComponent } from '../../bao-cao/bao-cao.component';
@NgModule({
  imports: [
    NbSidebarModule,
    NbLayoutModule,
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MaterialModule,
    SweetAlert2Module.forRoot()
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    AppLoginComponent,
    AppThongtinCaNhanComponent,DanhSachUsersComponent,
    ThemUserComponent,
    PhieukhaosatComponent,
    KetQuaKhaoSatComponent,
    DsSinhvienComponent,
    ThemSinhvienComponent,
    ThemDsSinhvienComponent,
    TruongComponent,
    ThemTruongComponent,
    ThemNganhComponent,
    DsNganhComponent,
    ThongKeComponent,
    BaoCaoComponent,
  ]
})

export class AdminLayoutModule {}
