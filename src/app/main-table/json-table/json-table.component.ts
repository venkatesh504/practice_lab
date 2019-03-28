import { Component, OnInit } from '@angular/core';
import data   from  '../../../assets/data.json';

@Component({
  selector: 'app-json-table',
  templateUrl: './json-table.component.html',
  styleUrls: ['./json-table.component.scss']
})
export class JsonTableComponent implements OnInit {


  myData:any;
  constructor() { 

  }

  ngOnInit() {
this.myData = data;

console.log(this.myData);
  }

}
