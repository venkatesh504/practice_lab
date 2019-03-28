import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainTableModule} from './main-table/main-table.module';

const routes: Routes = [
  {path:'main',loadChildren:"./main-table/main-table.module#MainTableModule"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    MainTableModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
