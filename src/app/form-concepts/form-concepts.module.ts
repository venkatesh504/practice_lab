import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormConceptsRoutingModule } from './form-concepts-routing.module';
import { FormOneComponent } from './form-one/form-one.component';
import { FormTwoComponent } from './form-two/form-two.component';
console.log('came to form module');
@NgModule({
  declarations: [FormOneComponent, FormTwoComponent],
  imports: [
    CommonModule,
    FormConceptsRoutingModule
  ]
})
export class FormConceptsModule { 

  
}
