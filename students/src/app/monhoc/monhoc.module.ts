import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonhocRoutingModule } from './monhoc-routing.module';
import { MonhocListComponent } from './monhoc-list/monhoc-list.component';

@NgModule({
  imports: [
    CommonModule,
    MonhocRoutingModule
  ],
  declarations: [MonhocListComponent]
})
export class MonhocModule { }
