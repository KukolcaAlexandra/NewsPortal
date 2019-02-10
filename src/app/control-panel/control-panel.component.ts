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
  
  onChange(selectedIndex: number) {
    this.selectedSource.emit(selectedIndex);
  }
 
  form = new FormGroup({
    comboBox: new FormControl({disabled: true}),
  });
  
  constructor() { }

  ngOnInit() {
  }

  handleEvent(sourceId: number) {
    this.selectedSource.emit(sourceId);
  }

  onCheck(checked: boolean) {
    this.localSource.emit(checked);
  }
}
