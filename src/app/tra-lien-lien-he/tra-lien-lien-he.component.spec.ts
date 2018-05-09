import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraLienLienHeComponent } from './tra-lien-lien-he.component';

describe('TraLienLienHeComponent', () => {
  let component: TraLienLienHeComponent;
  let fixture: ComponentFixture<TraLienLienHeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraLienLienHeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraLienLienHeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
