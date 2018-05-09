import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule,MatSliderModule,MatRadioModule,MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,MatOptionModule, 
  MatSortModule, MatTableModule , MatToolbarModule ,MatCardModule,MatFormFieldModule,MatSelectModule, MatMenuModule ,
   MatSidenavModule ,MatDividerModule,MatListModule,MatTabsModule,MatProgressBarModule,MatDatepickerModule,MatNativeDateModule,MatIconModule} from '@angular/material';
  import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
  import { NbSidebarModule, NbLayoutModule } from '@nebular/theme';
  import { ChartsModule } from 'ng2-charts/ng2-charts';
  import { LoadingModule } from 'ngx-loading';
@NgModule({
  imports: [MatSlideToggleModule,MatSliderModule,LoadingModule,MatRadioModule,ChartsModule,MatDatepickerModule,MatOptionModule,MatCardModule,MatInputModule,MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatToolbarModule,MatMenuModule,MatSidenavModule,MatFormFieldModule,MatSelectModule,MatDividerModule,MatListModule,MatTabsModule,MatProgressBarModule,MatNativeDateModule],
  exports: [MatSlideToggleModule,MatSliderModule,LoadingModule,MatRadioModule,ChartsModule,MatDatepickerModule,MatIconModule,MatOptionModule,MatCardModule,MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule,
    MatProgressSpinnerModule,MatToolbarModule,MatMenuModule,MatFormFieldModule,MatSelectModule,MatSidenavModule,MatDividerModule,MatListModule,MatTabsModule,MatProgressBarModule,MatNativeDateModule],
})
export class MaterialModule { }