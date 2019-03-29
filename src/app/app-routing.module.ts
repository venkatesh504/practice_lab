import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponetComponent } from './main-componet/main-componet.component';
import { DemomaincomponentComponent } from './demomaincomponent/demomaincomponent.component';
const routes: Routes = [
  {path:'',component:MainComponetComponent},
  {path:'ss',component:DemomaincomponentComponent},
  {path:'form-concept', loadChildren:"./form-concepts/form-concepts.module#FormConceptsModule"},
  {path:'main-table', loadChildren:"./main-table/main-table.module#MainTableModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
