import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KetQuaKhaoSatComponent } from './ket-qua-khao-sat.component';

describe('KetQuaKhaoSatComponent', () => {
  let component: KetQuaKhaoSatComponent;
  let fixture: ComponentFixture<KetQuaKhaoSatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetQuaKhaoSatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KetQuaKhaoSatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
