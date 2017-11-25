import { Component, OnInit } from '@angular/core';

import { PostService } from 'app/services'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html'
})
export class PostsPageComponent implements OnInit {

  public posts: Array<any>

  constructor(private postService: PostService) {
    this.posts = []
  }

  ngOnInit() {
    this.get()
  }

  get() {
    this.postService.blogGetAll().subscribe(
      data => {
        this.posts = data.posts
      },
      error => {

      }
    )
  }

  older() {

  }

  newer() {

  }

}
