import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormOneComponent } from './form-one/form-one.component';
import { FormTwoComponent } from './form-two/form-two.component';

const routes: Routes = [
  {path:'',component:FormTwoComponent},
  {path:'formTwo',component:FormTwoComponent},
  {path:'formOne', component:FormOneComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormConceptsRoutingModule { }
