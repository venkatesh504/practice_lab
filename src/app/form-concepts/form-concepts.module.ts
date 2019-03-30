import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { FormConceptsRoutingModule } from './form-concepts-routing.module';

import { FormValidationComponent } from './form-validation/form-validation.component';
console.log('came to form module');
@NgModule({
  declarations: [ FormValidationComponent],
  imports: [
    CommonModule,
    FormConceptsRoutingModule,
    FormsModule
  ]
})
export class FormConceptsModule { 

  
}
