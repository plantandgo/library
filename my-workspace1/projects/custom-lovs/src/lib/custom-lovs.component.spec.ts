import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLovsComponent } from './custom-lovs.component';

describe('CustomLovsComponent', () => {
  let component: CustomLovsComponent;
  let fixture: ComponentFixture<CustomLovsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomLovsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomLovsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
