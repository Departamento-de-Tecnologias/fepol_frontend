import { TestBed } from '@angular/core/testing';

import { SuborganizacionService } from './suborganizacion.service';

describe('SuborganizacionService', () => {
  let service: SuborganizacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuborganizacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
