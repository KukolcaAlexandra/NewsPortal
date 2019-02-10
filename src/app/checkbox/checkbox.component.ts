import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Output() localSource = new EventEmitter<boolean>();

  checkbox = new FormControl();

  constructor() { }

  ngOnInit() {
  }

  onClick(checked: boolean) {
    console.log('click on checkbox');
    console.log(checked);
    this.localSource.emit(checked);
  }
}
