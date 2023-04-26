import { TestBed } from '@angular/core/testing';

import { RolusuarioService } from './rolusuario.service';

describe('RolusuarioService', () => {
  let service: RolusuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolusuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
