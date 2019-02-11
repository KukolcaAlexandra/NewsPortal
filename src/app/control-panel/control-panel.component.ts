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
  
  /*form = new FormGroup({
    comboBox: new FormControl({disabled: true}),
  });*/

  
  constructor() { }

  /*newsForm = new FormGroup({
    heading: new FormControl(''),
    comboBox: new FormControl({disabled: true}),
    inputKeyWord: new FormControl(''),
    checkMyNews: new FormControl(''),
    image: new FormControl(''),
    date: new FormControl(''),
    author: new FormControl(''),
    sourceUrl: new FormControl(''),
  });*/
  heading = new FormControl('');
  comboBox = new FormControl({disabled: true});
  inputKeyWord = new FormControl('');
  checkMyNews = new FormControl('');
  image = new FormControl('');
  date = new FormControl('');
  author = new FormControl('');
  sourceUrl = new FormControl('');

  ngOnInit() {
  }

  onChange(selectedIndex: number) {
    this.selectedSource.emit(selectedIndex);
  }

  handleEvent(sourceId: number) {
    this.selectedSource.emit(sourceId);
  }

  onCheck(checked: boolean) {
    this.localSource.emit(checked);
  }

  onFilterClick() {
    console.log('filter');
  }

  onCheckMyNews(checked: boolean) {
    this.localSource.emit(checked);
    if (checked) {
      this.comboBox.disable();
    } else {
      this.comboBox.enable();
    }
  }
}
