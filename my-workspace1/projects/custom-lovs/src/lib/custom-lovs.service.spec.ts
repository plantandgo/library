import { TestBed } from '@angular/core/testing';

import { CustomLovsService } from './custom-lovs.service';

describe('CustomLovsService', () => {
  let service: CustomLovsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomLovsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
