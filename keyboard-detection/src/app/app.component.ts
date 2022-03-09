import { Component } from '@angular/core';
import { KeyboardPressedService } from 'projects/keyboard-pressed/src/lib/keyboard-pressed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'keyboard-detection';

  constructor(
    private keyboardPressed: KeyboardPressedService
  ) {}
}
