import { TestBed } from '@angular/core/testing';

import { KeyboardPressedService } from './keyboard-pressed.service';

describe('KeyboardPressedService', () => {
  let service: KeyboardPressedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyboardPressedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
