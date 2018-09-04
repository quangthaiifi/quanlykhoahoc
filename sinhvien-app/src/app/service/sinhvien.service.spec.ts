import { TestBed, inject } from '@angular/core/testing';

import { SinhvienService } from './sinhvien.service';

describe('SinhvienService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SinhvienService]
    });
  });

  it('should be created', inject([SinhvienService], (service: SinhvienService) => {
    expect(service).toBeTruthy();
  }));
});
