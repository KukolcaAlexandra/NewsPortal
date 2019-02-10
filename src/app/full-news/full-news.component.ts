import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-full-news',
  templateUrl: './full-news.component.html',
  styleUrls: ['./full-news.component.css']
})
export class FullNewsComponent implements OnInit {
  @Input() sourceName: string;

  constructor() { }

  ngOnInit() {
  }

  checkSource() {
    if (this.sourceName === "Local News"){
      return true;
    }
    return false;
  }

  onClick() {
    console.log('delete');
  }
}
