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

  handleEvent(event: number) {
    console.log('control panel');
    console.log(event);
    //this.currentSource = event;
    this.selectedSource.emit(event);
  }

  /*onChange(sourceIndex: number) {
    console.log(sourceIndex);
    this.currentSource = this.sources[sourceIndex];
    this.selectedSource.emit(this.currentSource);
    
    console.log(this.currentSource);
  }*/

}

