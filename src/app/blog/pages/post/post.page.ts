import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostService } from 'app/services'

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html'
})
export class PostPageComponent implements OnInit {

  public post
  private title

  constructor(private postService: PostService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.title = this.route.snapshot.params['title'] || ''
    this.get()
  }

  get() {
    this.postService.blogGet(this.title).subscribe(
      data => {
        this.post = data.post
      },
      error => {

      }
    )
  }

  updateUrl() {
    this.post.img = ''
  }
}
