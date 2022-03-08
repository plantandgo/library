import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'lib-keyboard-pressed',
  template: `
    <p>
      keyboard-pressed works!
    </p>
  `,
  styles: [
  ]
})
export class KeyboardPressedComponent implements OnInit {


  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    // debugger;
    if (event) {
      console.log('keyCode ', event.keyCode, ' which', event.which, ' key ', event.key);
      //  debugger;

    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
