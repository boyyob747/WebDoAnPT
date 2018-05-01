import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsLineHeComponent } from './ds-line-he.component';

describe('DsLineHeComponent', () => {
  let component: DsLineHeComponent;
  let fixture: ComponentFixture<DsLineHeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsLineHeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsLineHeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
