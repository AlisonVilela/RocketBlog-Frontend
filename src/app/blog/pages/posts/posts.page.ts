import { Component, OnInit } from '@angular/core';

import { PostService } from 'app/services'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html'
})
export class PostsPageComponent implements OnInit {

  public posts: Array<any>
  public currentPage = 0
  public pageCount = 0

  constructor(private postService: PostService) {
    this.posts = []
  }

  ngOnInit() {
    this.get()
  }

  get() {
    this.postService.blogGetAll(this.currentPage, 3).subscribe(
      data => {
        this.posts = data.posts
        this.pageCount = data.pageCount
      },
      error => {

      }
    )
  }

  older() {
    this.currentPage++
    this.get()
  }

  newer() {
    this.currentPage--
    this.get()
  }

}
