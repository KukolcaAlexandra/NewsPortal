import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SOURCES, ISource } from '../mock-news-sources';
//import { ISource } from '../interfaces/news';
//import { EventEmitter } from 'protractor';

/*interface OnChanges {
  ngOnChanges(changes: any): void
}*/


@Component({
  selector: 'app-source-combo-box',
  templateUrl: './source-combo-box.component.html',
  styleUrls: ['./source-combo-box.component.css']
})
export class SourceComboBoxComponent implements OnInit {
  @Output() selectedSource = new EventEmitter<number>();
  //currentSource: ISource;
  sources: ISource[] = SOURCES;
  //currentSelect:any;

  onChange(selectedIndex: number) {
    console.log('source in onChange');
    console.log(selectedIndex);
    //this.currentSelect = sourceIndex;
    this.selectedSource.emit(selectedIndex);
  }
 
  onClick(event: any) {
    console.log('onClick');
    console.log(event);
  }

  comboBox = new FormControl();
  /*form = new FormGroup({
    source: new FormControl(0 this.sources[0]),
  });*/

  constructor() { }

  ngOnInit() {
    console.log('on init');
    //console.log(this.currentSelect);
  }

}
