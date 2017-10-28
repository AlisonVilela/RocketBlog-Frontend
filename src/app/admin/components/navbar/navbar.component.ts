import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { SessionService } from 'app/services'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html'
})
export class NavBarComponent {

  constructor(private router: Router, public sessionService: SessionService) {

  }

  logout() {
    this.sessionService.logout().then(data => {
      this.router.navigate(['/admin', 'auth']);
    })
  }
}
