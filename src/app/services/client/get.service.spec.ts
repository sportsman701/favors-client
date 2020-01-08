import { TestBed } from '@angular/core/testing';

import { GetService } from './get.service';

describe('GetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetService = TestBed.get(GetService);
    expect(service).toBeTruthy();
  });
});
