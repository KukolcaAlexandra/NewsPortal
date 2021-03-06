import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  
  public newsId: string;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.newsId = this.route.snapshot.params['id'];
  }

}
