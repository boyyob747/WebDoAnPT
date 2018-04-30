import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsSinhvienComponent } from './ds-sinhvien.component';

describe('DsSinhvienComponent', () => {
  let component: DsSinhvienComponent;
  let fixture: ComponentFixture<DsSinhvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsSinhvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsSinhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
