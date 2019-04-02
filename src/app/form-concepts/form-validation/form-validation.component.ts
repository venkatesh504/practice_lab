import { Component, OnInit,ChangeDetectorRef} from '@angular/core';
import Form_Data from '../../../assets/Form_Data.json';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {
name:string;
password:string;
form_data :any;
cities_option:any;
course_option:any;
age:number;
status:any;

data: any = {};
  constructor() {
  }

  ngOnInit() {
    this.form_data = Form_Data; 
    this.course_option = 'NOCOURSE';
    this.cities_option = 'NOCITY'
    
  }
  onSubmit ( controls, invalid){ 

        if( this.course_option  == "NOCOURSE"){
alert(JSON.stringify("select Any courseto submit"));
        }
        if( this.cities_option== "NOCITY"){
     alert(JSON.stringify("select Any city to submit"));
             }
  }
  statusFunction(){
    // console.log('checking age')
    if(this.age < 18){
      console.log("coming");
      // this.status= true;
          return true;
    }


  }
 

}
