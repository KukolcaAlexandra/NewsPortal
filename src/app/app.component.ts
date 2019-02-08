import { Component, OnInit } from '@angular/core';
import { ISource, SOURCES } from './mock-news-sources';
import { INews, NEWS } from './mock-news';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newsPortal';
  sources: ISource[];// = SOURCES;
  currentSource: ISource;
  sourceName: string;// = sources[0].name;
  news: INews[][];
  currentNews: INews[];

  ngOnInit() {
    this.sources = SOURCES;
    //this.currentSource = this.sources[0];
    this.sourceName = 'Source Name'; //this.sources[0].name;
    this.news = NEWS;
    //this.
  }

  handleEvent(sourceIndex: number) {
    console.log('app component');
    console.log(event);
    //this.currentSource = event;
    //this.selectedSource.emit(event);
    this.currentSource = this.sources[sourceIndex];
    this.sourceName = this.currentSource.name;
    //this.selectedSource.emit(this.currentSource);
    
    //console.log(this.currentSource);
    this.currentNews = this.news[sourceIndex];
    //console.log(this.currentNews);
  }
}
