import { TestBed } from '@angular/core/testing';

import { KingScorerServiceService } from './king-scorer-service.service';

describe('KingScorerServiceService', () => {
  let service: KingScorerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KingScorerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
