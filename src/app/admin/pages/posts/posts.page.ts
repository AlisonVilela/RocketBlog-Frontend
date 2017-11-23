import { Component } from '@angular/core'

import { PostService, ModalsService } from 'app/services'

import { PostPopupPage } from 'app/modals'

import { IPost, IPostCreate } from 'app/models'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html'
})
export class PostsPageComponent {

  public posts: Array<IPost> = []

  public order: string = 'date';
  public reverse: boolean = false;

  constructor(private postService: PostService,
              private modalsService: ModalsService) {
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
    this.modalsService.openForm(
      PostPopupPage,
      {
        user: <IPostCreate>{},
        type: 'create' 
      },
      (result) => {
        this.postService.create(result).subscribe(
          data => {
            this.posts.push(data.post)
          },
          error => {

          }
        )
      }
    )
  }

  edit(post) {
    this.modalsService.openForm(
      PostPopupPage,
      {
        user: JSON.parse(JSON.stringify( post )),
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
