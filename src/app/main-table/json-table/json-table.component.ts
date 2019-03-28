import { Component, OnInit } from '@angular/core';
import data   from  '../../../assets/data.json';
import MOCK_DATA from '../../../assets/MOCK_DATA.json';
import solo_data from '../../../assets/solo_data.json'

@Component({
  selector: 'app-json-table',
  templateUrl: './json-table.component.html',
  styleUrls: ['./json-table.component.scss']
})
export class JsonTableComponent implements OnInit {
totalData :any;
solo_Data: any;

  myData:any;
  constructor() { 

  }

  ngOnInit() {
this.myData = data;
this.totalData = MOCK_DATA;
this.solo_Data = solo_data;
console.log(this.myData);
  }

}
