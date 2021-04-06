import { TestBed } from '@angular/core/testing';
import { Vilao } from 'src/app/interfaces/vilao';

import { EnvelopeService } from '../../app/services/envelope/envelope.service';

describe('EnvelopeService', () => {
  let service: EnvelopeService;

  const viloes = new Array<Vilao>(
    { id: 1, nome: 'Vilão 1'},
    { id: 2, nome: 'Vilão 2'},
    { id: 3, nome: 'Vilão 3'},
  );

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvelopeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create an array of Vilões', () => {
    expect(service.viloes).toBeDefined();
  });
});
