import { Component } from '@angular/core'

import { IPost } from 'app/models'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html'
})
export class PostsPageComponent {

  public posts: Array<IPost> = [{
    date: new Date(), 
    title: 'Teste', 
    content: '', 
    resumeContent: 'Postagem de teste',
    category: 'Entrevista',
    author: 'Thor'}]

  public order: string = 'date';
  public reverse: boolean = false;

  constructor() {
  }

  get() {

  }

  create() {

  }

  edit() {

  }

  delete() {

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
