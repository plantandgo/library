import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLoaderLibraryComponent } from './custom-loader-library.component';

describe('CustomLoaderLibraryComponent', () => {
  let component: CustomLoaderLibraryComponent;
  let fixture: ComponentFixture<CustomLoaderLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomLoaderLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomLoaderLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
