import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ISource, SOURCES } from '../mock-news-sources';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  @Output() selectedSource = new EventEmitter<number>();
  @Output() localSource = new EventEmitter<boolean>();
  

  sources: ISource[] = SOURCES;
  //currentSelect:any;

  onChange(selectedIndex: number) {
    console.log('source in onChange');
    console.log(selectedIndex);
    //this.currentSelect = sourceIndex;
    this.selectedSource.emit(selectedIndex);
    //this.comboBox.disable();
  }
 
  onClick(event: any) {
    console.log('onClick');
    console.log(event);
  }

  //comboBox = new FormControl({disabled: true});
  form = new FormGroup({
    comboBox: new FormControl({disabled: true}),
  });
  //sources: ISource[] = SOURCES;
  //currentSource: ISource;
  constructor() { }

  ngOnInit() {
   
  }

  handleEvent(sourceId: number) {
    console.log('control panel');
    console.log(sourceId);
    //this.currentSource = event;
    this.selectedSource.emit(sourceId);
  }

  onCheck(checked: boolean) {
    this.localSource.emit(checked);
  }
}
