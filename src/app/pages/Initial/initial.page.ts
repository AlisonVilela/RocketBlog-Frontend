import { Component, OnInit } from '@angular/core';

import { TestService } from 'app/services'

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial.page.html'
})
export class InitialPageComponent implements OnInit {
  title = 'Blog-Rocket!';
  posts: any = null

  constructor(private testService: TestService) {

  }

  ngOnInit() {
    this.testService.get().subscribe(
      data => {
        this.posts = data
      },
      error => {

      }
    )
  }
}
