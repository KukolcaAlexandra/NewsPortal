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

  redirectToDescription(news: INews) {
    console.log('redirect!!!!');
    console.log(news);
  } 

  checkSource() {
    console.log('checkSource');
    console.log(this.source);
    if (this.source === "Local"){
      return true;
    }
    return false;
  }
}
