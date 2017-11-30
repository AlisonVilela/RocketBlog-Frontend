import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostService } from 'app/services'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html'
})
export class PostsPageComponent implements OnInit, OnDestroy {

  public posts: Array<any>
  public currentPage = 0
  public pageCount = 0
  private category
  public loading = false
  private param: any

  constructor(private postService: PostService, private route: ActivatedRoute) {
    this.posts = []
  }

  ngOnInit() {
    this.param = this.route.params.subscribe((param: any) => {
      this.category = param['category'] || ''
      this.get()
    })
    this.get()
  }

  ngOnDestroy() {
    this.param.unsubscribe()
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
