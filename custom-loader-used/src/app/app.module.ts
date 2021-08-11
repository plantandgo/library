import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomLoaderLibModule } from '@plantandgo/custom-loader-lib';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CustomLoaderLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
