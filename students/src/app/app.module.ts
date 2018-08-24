import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MonhocListComponent} from './monhoc/monhoc-list/monhoc-list.component'
@NgModule({
  declarations: [
    AppComponent,
    MonhocListComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
