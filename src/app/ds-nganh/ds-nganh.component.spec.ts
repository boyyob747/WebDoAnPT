import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsNganhComponent } from './ds-nganh.component';

describe('DsNganhComponent', () => {
  let component: DsNganhComponent;
  let fixture: ComponentFixture<DsNganhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsNganhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsNganhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
