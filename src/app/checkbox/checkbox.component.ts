import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  
  checkbox = new FormControl({ label: 'Label1', selected: true});

  constructor() { }

  ngOnInit() {
  }

}
