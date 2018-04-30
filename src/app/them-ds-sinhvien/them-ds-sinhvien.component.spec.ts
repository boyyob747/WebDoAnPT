import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemDsSinhvienComponent } from './them-ds-sinhvien.component';

describe('ThemDsSinhvienComponent', () => {
  let component: ThemDsSinhvienComponent;
  let fixture: ComponentFixture<ThemDsSinhvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemDsSinhvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemDsSinhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
