import { Component, OnInit, Input } from '@angular/core';
import { INews } from '../interfaces/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {
  @Input() news: INews;
  @Input() source: string;
  
  constructor() { }

  ngOnInit() {
  }

  checkSource() {
    if (this.source === "Local"){
      return true;
    }
    return false;
  }

  deleteNews(news: INews) {
    console.log('delete news');
  }
}
