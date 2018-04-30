import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSinhvienComponent } from './them-sinhvien.component';

describe('ThemSinhvienComponent', () => {
  let component: ThemSinhvienComponent;
  let fixture: ComponentFixture<ThemSinhvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemSinhvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemSinhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
