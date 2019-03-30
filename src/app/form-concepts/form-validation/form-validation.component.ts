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
  constructor(
    private cd:ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.form_data = Form_Data; 
    
  }
  onSubmit (){ 
   
        alert(JSON.stringify(this.data));
   
  }
  statusFunction(){
    console.log('checking age')
    if(this.age<18){
      console.log("coming");
      this.status= true;
    }else{
      console.log("not v");
      this.status = false;
    }
    return true;
    // this.cd.detectChanges()
  }
 

}
