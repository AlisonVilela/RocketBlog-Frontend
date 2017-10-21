import { Component, OnInit } from '@angular/core';

import { TestService, AlertMessage } from 'app/services'

import { IPostTeste } from 'app/models'

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial.page.html'
})
export class InitialPageComponent implements OnInit {
  title = 'Blog-Rocket!';
  posts: any = []
  postagem: IPostTeste = {title: '', text: ''}

  constructor(private testService: TestService, private alertMessage: AlertMessage) {

  }

  ngOnInit() {
    /*this.testService.getAll().subscribe(
      data => {
        this.posts = data
      },
      error => {

      }
    )*/
  }

  post(input) {
    this.testService.post(input).subscribe(
      data => {
        this.postagem = {title: '', text: ''}
        this.posts.push(data)
      },
      error => {

      }
    )
  }

  delete(id) {
    this.testService.delete(id).subscribe(
      data => {
        this.posts = this.posts.filter(i => i._id !== id)
      },
      error => {

      }
    )
  }

  open(id) {
    this.testService.get(id).subscribe(
      data => {
        this.alertMessage.addAlert({type: 'success', message: data})
      },
      error => {
        this.alertMessage.addAlert({type: 'error', message: 'Deu ruim féi!'})
      }
    )
  }
}
