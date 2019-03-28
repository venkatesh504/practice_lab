import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsonTableComponent } from './json-table/json-table.component';

const routes: Routes = [
  {path:'',component:JsonTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainTableRoutingModule { }
