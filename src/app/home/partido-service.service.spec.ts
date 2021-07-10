import { TestBed } from '@angular/core/testing';

import { PartidoServiceService } from './partido-service.service';

describe('PartidoServiceService', () => {
  let service: PartidoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartidoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
