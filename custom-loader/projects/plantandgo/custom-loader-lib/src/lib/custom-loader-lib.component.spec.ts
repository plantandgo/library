import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLoaderLibComponent } from './custom-loader-lib.component';

describe('CustomLoaderLibComponent', () => {
  let component: CustomLoaderLibComponent;
  let fixture: ComponentFixture<CustomLoaderLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomLoaderLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomLoaderLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
