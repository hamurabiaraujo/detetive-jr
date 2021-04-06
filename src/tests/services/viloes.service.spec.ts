import { TestBed } from '@angular/core/testing';

import { ViloesService } from '../../app/services/viloes/viloes.service';

describe('ViloesService', () => {
  let service: ViloesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViloesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
