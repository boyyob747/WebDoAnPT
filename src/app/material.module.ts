import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,MatOptionModule, 
  MatSortModule, MatTableModule , MatToolbarModule ,MatCardModule,MatFormFieldModule,MatSelectModule, MatMenuModule ,
   MatSidenavModule ,MatDividerModule,MatListModule,MatTabsModule,MatProgressBarModule,MatDatepickerModule,MatNativeDateModule} from '@angular/material';
  import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
  import { NbSidebarModule, NbLayoutModule } from '@nebular/theme';
@NgModule({
  imports: [MatDatepickerModule,MatOptionModule,MatCardModule,MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatToolbarModule,MatMenuModule,MatSidenavModule,MatFormFieldModule,MatSelectModule,MatDividerModule,MatListModule,MatTabsModule,MatProgressBarModule,MatNativeDateModule],
  exports: [MatDatepickerModule,MatOptionModule,MatCardModule,MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule,
    MatProgressSpinnerModule,MatToolbarModule,MatMenuModule,MatFormFieldModule,MatSelectModule,MatSidenavModule,MatDividerModule,MatListModule,MatTabsModule,MatProgressBarModule,MatNativeDateModule],
})
export class MaterialModule { }