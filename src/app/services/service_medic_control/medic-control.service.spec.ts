import { TestBed } from '@angular/core/testing';

import { MedicControlService } from './medic-control.service';

describe('MedicControlService', () => {
  let service: MedicControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
