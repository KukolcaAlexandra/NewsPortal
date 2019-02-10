import { Component, OnInit } from '@angular/core';
import { ISource, SOURCES } from '../mock-news-sources';
import { INews } from '../interfaces/news';
import { NEWS } from '../mock-news';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

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
    //console.log(event);
    //this.currentSource = event;
    //this.selectedSource.emit(event);
    //this.currentSource = this.sources[sourceIndex-2];
    console.log(sourceIndex);
    this.currentNews = this.news[sourceIndex-1];
    console.log(this.currentNews);
    //console.log(this.currentSource);
    if (sourceIndex === 1) {
      this.sourceName = "Local";
    } else {
      this.currentSource = this.sources[sourceIndex-2];
      this.sourceName = this.currentSource.name;
    }
    //this.selectedSource.emit(this.currentSource);
    
    //console.log(this.currentSource);
    //this.currentNews = this.news[sourceIndex-2];
    //console.log(this.currentNews);
  }
}
