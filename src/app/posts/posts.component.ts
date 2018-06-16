import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPosts().subscribe((data: any[]) => {
      console.log(data);
      this.posts = data;
    });
  }
}
