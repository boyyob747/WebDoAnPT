import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThucHienKhaoSatComponent } from './thuc-hien-khao-sat.component';

describe('ThucHienKhaoSatComponent', () => {
  let component: ThucHienKhaoSatComponent;
  let fixture: ComponentFixture<ThucHienKhaoSatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThucHienKhaoSatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThucHienKhaoSatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
