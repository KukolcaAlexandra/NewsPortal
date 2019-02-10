import { Component, OnInit, Input } from '@angular/core';
import { INews } from '../interfaces/news';
import { NEWS } from '../mock-news';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  @Input() newsList: INews[] = NEWS[0];
  @Input() source: string;
  constructor() { }

  ngOnInit() {
    console.log('list');
    console.log(this.newsList);
  }

}
