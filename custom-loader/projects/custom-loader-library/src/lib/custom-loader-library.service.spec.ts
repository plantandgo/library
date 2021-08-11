import { TestBed } from '@angular/core/testing';

import { CustomLoaderLibraryService } from './custom-loader-library.service';

describe('CustomLoaderLibraryService', () => {
  let service: CustomLoaderLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomLoaderLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
