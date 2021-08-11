import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {CustomLoaderLibModule} from '@plantandgo/custom-loader-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomLoaderLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
