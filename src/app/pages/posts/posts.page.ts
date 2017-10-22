import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html'
})
export class PostsPageComponent {

  public posts: Array<any>

  constructor() {
    this.posts = [
      {
        titleUrl: 'teste-post',
        title: 'Teste Post',
        img: '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',
        contentAbstract: '<p>Teste content</p>',
        date: '21-10-2017',
        createBy: 'Thor'
      }
    ]
  }

  older() {

  }

  newer() {

  }

}
