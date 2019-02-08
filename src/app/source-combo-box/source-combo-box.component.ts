import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SOURCES } from '../mock-news-sources';
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
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
    console.log('vote');
  }
  //@Output() outputSourceName: EventEmitter<string> = new EventEmitter();
  
  //Output() onChanged: EventEmitter<boolean> = new EventEmitter();
  sources = SOURCES;

	//change(increased:any) {
	//	this.onChanged.emit(increased);
	//}
  /*states = [
    {name: 'Arizona', abbrev: 'AZ'},
    {name: 'California', abbrev: 'CA'},
    {name: 'Colorado', abbrev: 'CO'},
    {name: 'New York', abbrev: 'NY'},
    {name: 'Pennsylvania', abbrev: 'PA'},
  ];*/

  form = new FormGroup({
    source: new FormControl(this.sources[0]),
  });

  /*form.source.registerOnChange((newValue: any, ...) => {
    dir.valueAccessor.writeValue(newValue);
  });*/

  constructor() { }

  ngOnInit() {
    console.log('on init');
  }

  /*ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }*/

  updateName() {
    // this.form.setValue('Nancy');
  }


  /*ngOnChanges(changes: any) {
    // changes.prop contains the old and the new value...
    console.log('change');
  }*/

  //registerOnChange(() => { console.log('change') });
  //registerOnChange((value: any) => console.log('change')): void;

}
