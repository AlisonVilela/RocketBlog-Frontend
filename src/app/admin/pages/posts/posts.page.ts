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

  public order: string = 'date';
  public reverse: boolean = false;

  constructor(private postService: PostService,
              private modalsService: ModalsService) {
  }

  ngOnInit() {
    this.get()
  }

  get() {
    this.postService.getAll().subscribe(
      data => {
        this.posts = data
      },
      error => {

      }
    )
  }

  create() {
    this.modalsService.openForm(
      PostPopupPage,
      {
        post: <IPostCreate>{},
        type: 'create' 
      },
      (result) => {
        this.postService.create(result).subscribe(
          data => {
            console.log(data)
            this.posts.push(data.object)
          },
          error => {

          }
        )
      },
      {
        size: 'lg'
      }
    )
  }

  edit(post) {
    this.modalsService.openForm(
      PostPopupPage,
      {
        post: JSON.parse(JSON.stringify( post )),
        type: 'edit' 
      },
      (result) => {
        this.postService.edit(result._id,result).subscribe(
          data => {
            this.posts[this.posts.indexOf(post)] = data
          },
          error => {

          }
        )
      },
      {
        size: 'lg'
      }
    )
  }

  delete(post) {
    const resolve = {
      title: 'User delete',
      message: 'Are you sure?',
      submit: () => {
        this.postService.delete(post._id).subscribe(
          data => {
            this.posts = this.posts.filter(u => u !== post)
          },
          error => {

          }
        )
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
