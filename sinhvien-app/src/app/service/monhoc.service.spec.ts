import { TestBed, inject } from '@angular/core/testing';

import { MonhocService } from './monhoc.service';

describe('MonhocService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonhocService]
    });
  });

  it('should be created', inject([MonhocService], (service: MonhocService) => {
    expect(service).toBeTruthy();
  }));
});
