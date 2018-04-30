import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemNganhComponent } from './them-nganh.component';

describe('ThemNganhComponent', () => {
  let component: ThemNganhComponent;
  let fixture: ComponentFixture<ThemNganhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemNganhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemNganhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
