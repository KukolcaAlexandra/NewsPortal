import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  keyWord = new FormControl('');
  
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log('filter');
  }

}
