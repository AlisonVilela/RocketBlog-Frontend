import { Component, OnInit } from '@angular/core'

import { PostService, ModalsService } from 'app/services'

import { PostPopupPage } from 'app/modals'

import { IPost, IPostCreate } from 'app/models'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html'
})
export class PostsPageComponent implements OnInit {

  public posts: Array<IPost> = []

  public order: string = 'date'
  public reverse: boolean = false
  public loading: boolean = false

  constructor(private postService: PostService,
              private modalsService: ModalsService) {
  }

  ngOnInit() {
    this.get()
  }

  get() {
    this.postService.getAll().subscribe(
      data => {
        this.posts = data.posts
      },
      error => {

      }
    )
  }

  create() {
    this.loading = true
    this.modalsService.openForm(
      PostPopupPage,
      {
        post: <IPostCreate>{},
        type: 'create' 
      },
      result => {
        if (result) {
          this.postService.create(result).subscribe(
            data => {
              this.loading = false
              this.posts.push(data.post)
            },
            error => {
              this.loading = false
            }
          )
        } else {
          this.loading = false
        }
      },
      {
        size: 'lg'
      }
    )
  }

  edit(post) {
    this.loading = true
    this.modalsService.openForm(
      PostPopupPage,
      {
        post: JSON.parse(JSON.stringify( post )),
        type: 'edit' 
      },
      (result) => {
        if (result) {
          this.postService.edit(result._id,result).subscribe(
            data => {
              this.loading = false
              this.posts[this.posts.indexOf(post)] = data.post
            },
            error => {
              this.loading = false
            }
          )
        } else {
          this.loading = false
        }
      },
      {
        size: 'lg'
      }
    )
  }

  delete(post) {
    this.loading = true
    const resolve = {
      title: 'User delete',
      message: 'Are you sure?',
      submit: (result) => {
        if (result) {
          this.postService.delete(post._id).subscribe(
            data => {
              this.posts = this.posts.filter(u => u !== post)
              this.loading = false
            },
            error => {
              this.loading = false
            }
          )
        } else {
          this.loading = false
        }
      }
    }
    this.modalsService.openMessage(resolve)
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse
    } else {
      this.reverse = false
      this.order = value
    }    
  }
}
