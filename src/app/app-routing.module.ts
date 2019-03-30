import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {path:'', loadChildren:"./form-concepts/form-concepts.module#FormConceptsModule"},
  {path:'main-table', loadChildren:"./main-table/main-table.module#MainTableModule"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
