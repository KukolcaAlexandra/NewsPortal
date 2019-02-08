import { Component, OnInit, Input } from '@angular/core';
import { INews, NEWS } from '../mock-news';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  @Input() newsList: INews[] = NEWS[0];
  constructor() { }

  ngOnInit() {
    console.log('list');
    console.log(this.newsList);
  }

}
