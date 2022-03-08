import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeyboardPressedModule } from 'projects/keyboard-pressed/src/lib/keyboard-pressed.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KeyboardPressedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
