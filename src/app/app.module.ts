import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {MainTableModule} from './main-table/main-table.module';
// import  { FormConceptsModule } from './form-concepts/form-concepts.module';
import { MainComponetComponent } from './main-componet/main-componet.component';
import { DemomaincomponentComponent } from './demomaincomponent/demomaincomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponetComponent,
    DemomaincomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MainTableModule,
    NgbModule,
    // FormConceptsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
