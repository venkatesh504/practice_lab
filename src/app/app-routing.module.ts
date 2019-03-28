import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainTableModule} from './main-table/main-table.module';
import {FormConceptsModule} from './form-concepts/form-concepts.module';

const newLocal = 'main-table';
const routes: Routes = [
{path:'', redirectTo:'main-tbale', pathMatch: 'full'},
  {path:'main-table',loadChildren:"./main-table/main-table.module#MainTableModule"},
  {path:'form-concept',loadChildren:"./form-concepts/form-concepts.module#FormConceptsModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    MainTableModule,
    FormConceptsModule,
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
