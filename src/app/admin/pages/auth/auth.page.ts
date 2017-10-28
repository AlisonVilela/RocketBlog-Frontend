import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { SessionService } from 'app/services'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html'
})
export class AuthPageComponent {

  public EmailFocus: boolean
  public PasswordFocus: boolean

  public Email: string
  public Password: string

  constructor(private sessionService: SessionService, private router: Router) {

  }

  setEmailFocus(focus) {
    this.EmailFocus = focus
  }

  setPasswordFocus(focus) {
    this.PasswordFocus = focus
  }

  login() {
    this.sessionService.login({email: this.Email, password: this.Password}).then(data => {
      console.log("aqui")
      this.router.navigate(['/admin'])
    })
  }
}
