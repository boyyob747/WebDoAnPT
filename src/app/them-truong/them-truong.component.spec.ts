import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemTruongComponent } from './them-truong.component';

describe('ThemTruongComponent', () => {
  let component: ThemTruongComponent;
  let fixture: ComponentFixture<ThemTruongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemTruongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemTruongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
