import { TestBed } from '@angular/core/testing';

import { SaredService } from './sared.service';

describe('SaredService', () => {
  let service: SaredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
