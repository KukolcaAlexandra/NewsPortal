import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SOURCES, ISource } from '../mock-news-sources';

@Component({
  selector: 'app-source-combo-box',
  templateUrl: './source-combo-box.component.html',
  styleUrls: ['./source-combo-box.component.css']
})

export class SourceComboBoxComponent implements OnInit {
  @Output() selectedSource = new EventEmitter<number>();
   
  sources: ISource[] = SOURCES;
  
  onChange(selectedIndex: number) {
    this.selectedSource.emit(selectedIndex);
  }
 
  comboBox = new FormControl({disabled: true});
  
  constructor() { }

  ngOnInit() {
  }

}
