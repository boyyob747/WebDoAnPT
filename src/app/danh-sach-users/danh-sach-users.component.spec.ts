import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachUsersComponent } from './danh-sach-users.component';

describe('DanhSachUsersComponent', () => {
  let component: DanhSachUsersComponent;
  let fixture: ComponentFixture<DanhSachUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
