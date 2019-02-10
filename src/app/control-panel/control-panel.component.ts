import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ISource, SOURCES } from '../mock-news-sources';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  @Output() selectedSource = new EventEmitter<number>();
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

  /*onChange(sourceIndex: number) {
    console.log(sourceIndex);
    this.currentSource = this.sources[sourceIndex];
    this.selectedSource.emit(this.currentSource);
    
    console.log(this.currentSource);
  }*/

}

