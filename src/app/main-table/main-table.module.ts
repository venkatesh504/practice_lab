import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainTableRoutingModule } from './main-table-routing.module';
import { JsonTableComponent } from './json-table/json-table.component';


@NgModule({
  declarations: [JsonTableComponent],
  imports: [
    CommonModule,
    MainTableRoutingModule
  ]
})
export class MainTableModule { }
