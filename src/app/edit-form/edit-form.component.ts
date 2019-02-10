import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  @Input() newsId: string;

  constructor() { }

  newsForm = new FormGroup({
    heading: new FormControl(''),
    shortDescription: new FormControl(''),
    content: new FormControl(''),
    image: new FormControl(''),
    date: new FormControl(''),
    author: new FormControl(''),
    sourceUrl: new FormControl(''),
  });

  ngOnInit() {
  }

  save() {
    console.log('save');
  }

  cancel() {
    console.log('cancel');
  }

}
