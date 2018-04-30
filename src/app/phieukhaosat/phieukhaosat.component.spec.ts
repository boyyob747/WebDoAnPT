import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieukhaosatComponent } from './phieukhaosat.component';

describe('PhieukhaosatComponent', () => {
  let component: PhieukhaosatComponent;
  let fixture: ComponentFixture<PhieukhaosatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieukhaosatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieukhaosatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
