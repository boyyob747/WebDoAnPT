import { TestBed, inject } from '@angular/core/testing';

import { QluserService } from './qluser.service';

describe('QluserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QluserService]
    });
  });

  it('should be created', inject([QluserService], (service: QluserService) => {
    expect(service).toBeTruthy();
  }));
});
