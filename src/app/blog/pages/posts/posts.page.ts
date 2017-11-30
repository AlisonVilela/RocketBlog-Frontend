import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostService } from 'app/services'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html'
})
export class PostsPageComponent implements OnInit {

  public posts: Array<any>
  public currentPage = 0
  public pageCount = 0
  private category
  public loading = false
  constructor(private postService: PostService, private route: ActivatedRoute) {
    this.posts = []
  }

  ngOnInit() {
    this.category = this.route.snapshot.params['category'] || ''
    this.get()
  }

  get() {
    this.posts = []
    this.loading = true
    this.postService.blogGetAll(this.currentPage, 3, this.category).subscribe(
      data => {
        this.posts = data.posts
        this.pageCount = data.pageCount
        this.loading = false
      },
      error => {
        this.loading = false
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
