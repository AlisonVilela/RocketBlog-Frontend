import { Component } from '@angular/core';

import { AlertMessage } from 'app/services'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html'
})
export class NavBarComponent {

  constructor(private alertMessage: AlertMessage) {

  }

  logout() {
    this.alertMessage.addAlert({type: 'warning', message: 'Logout'})
  }
}
