import { Component, OnInit } from '@angular/core';
import { ISource, SOURCES } from '../mock-news-sources';
import { INews } from '../interfaces/news';
import { NEWS, LOCAL_NEWS } from '../mock-news';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  title = 'newsPortal';
  sources: ISource[];
  currentSource: ISource;
  sourceName: string;
  news: INews[][];
  currentNews: INews[];
  localSource: INews[];
  currentIndex: number;
  showLoadButton: boolean = false;

  ngOnInit() {
    this.sources = SOURCES;
    this.localSource = LOCAL_NEWS;
    this.sourceName = 'Source Name'; 
    this.news = NEWS;
  }

  handleEvent(sourceIndex: number) {
    this.currentIndex = sourceIndex - 1;
    this.currentNews = this.news[this.currentIndex];
    this.currentSource = this.sources[this.currentIndex];
    this.sourceName = this.currentSource.name;
    this.showLoadButton = true;
  }

  onCheck(checked: boolean) {
    if (checked) {
      this.sourceName = "Local";
      this.currentNews = this.localSource;
      this.showLoadButton = false;
    } else {
      if (this.currentIndex) {
        this.currentNews = this.news[this.currentIndex];
        this.currentSource = this.sources[this.currentIndex];
        this.sourceName = this.currentSource.name;
        this.showLoadButton = true;
      } else {
        this.sourceName = "Source Name";
        this.currentNews = [];
        this.showLoadButton = false;
      }
    }
  }
}
