import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppThongtinCaNhanComponent } from './app-thongtin-ca-nhan.component';

describe('AppThongtinCaNhanComponent', () => {
  let component: AppThongtinCaNhanComponent;
  let fixture: ComponentFixture<AppThongtinCaNhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppThongtinCaNhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppThongtinCaNhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
