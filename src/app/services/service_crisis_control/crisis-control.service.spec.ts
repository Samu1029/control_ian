import { TestBed } from '@angular/core/testing';

import { CrisisControlService } from './crisis-control.service';

describe('CrisisControlService', () => {
  let service: CrisisControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrisisControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
