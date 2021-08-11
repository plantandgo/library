import { TestBed } from '@angular/core/testing';

import { CustomLoaderLibService } from './custom-loader-lib.service';

describe('CustomLoaderLibService', () => {
  let service: CustomLoaderLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomLoaderLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
