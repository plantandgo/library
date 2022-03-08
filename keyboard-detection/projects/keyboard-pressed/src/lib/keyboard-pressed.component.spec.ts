import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardPressedComponent } from './keyboard-pressed.component';

describe('KeyboardPressedComponent', () => {
  let component: KeyboardPressedComponent;
  let fixture: ComponentFixture<KeyboardPressedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyboardPressedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardPressedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
