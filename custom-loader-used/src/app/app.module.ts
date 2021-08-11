import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CustomLoaderLibraryModule } from 'custom-loader-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomLoaderLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
