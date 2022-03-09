import { HostListener, Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { take } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class KeyboardPressedService {

  // @HostListener('window:keydown', ['$event'])
  // keyEvent(event: KeyboardEvent) {
  //   // debugger;
  //   if (event) {
  //     console.log('keyCode ', event.keyCode, ' which', event.which, ' key ', event.key);
  //     //  debugger;

  //   }
  // }

  activeKeys0: any = {};
  activeKeys: any = {};

  constructor() {

    fromEvent(window, 'keydown').subscribe((res: any) => {
      // debugger;
      this.activeKeys0[res.key] = true;
      if (res) {
        if (!_.isEqual(this.activeKeys0, this.activeKeys)) {
          console.log('keyCode ', res.keyCode, ' which', res.which, ' key ', res.key);
          //  debugger;
          this.activeKeys[res.key] = true;
          this.showActiveKeys();
        }
      }
    });

    fromEvent(window, 'keyup').subscribe((res: any) => {
      // debugger;
      delete this.activeKeys0[res.key];
      if (res) {
        if (!_.isEqual(this.activeKeys0, this.activeKeys)) {
          console.log('keyCode ', res.keyCode, ' which', res.which, ' key ', res.key);
          //  debugger;
          delete this.activeKeys[res.key];
          this.showActiveKeys();
        }
      }
    });
  }

  showActiveKeys() {
    console.log('showActiveKeys ', this.activeKeys);
  }

}
