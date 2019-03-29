import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainTableRoutingModule } from './main-table-routing.module';
import { JsonTableComponent } from './json-table/json-table.component';
import { MainTableComponent } from './main-table.component';


@NgModule({
  declarations: [JsonTableComponent, MainTableComponent],
  imports: [
    CommonModule,
    MainTableRoutingModule
  ]
})
export class MainTableModule { }
