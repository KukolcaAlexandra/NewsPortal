import { Component, OnInit } from '@angular/core';
import { ISource, SOURCES } from './mock-news-sources';
import { INews } from './interfaces/news';
import { NEWS } from './mock-news';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ngOnInit() {
  }

  handleEvent(sourceIndex: number) {
  }
}
