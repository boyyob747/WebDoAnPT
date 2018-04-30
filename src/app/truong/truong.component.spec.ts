import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruongComponent } from './truong.component';

describe('TruongComponent', () => {
  let component: TruongComponent;
  let fixture: ComponentFixture<TruongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
