import { TestBed } from '@angular/core/testing';

import { Prueba02Service } from './prueba02.service';

describe('Prueba02Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Prueba02Service = TestBed.get(Prueba02Service);
    expect(service).toBeTruthy();
  });
});
