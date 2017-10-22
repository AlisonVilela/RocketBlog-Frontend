import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html'
})
export class AuthPageComponent {

  public EmailFocus: boolean
  public PasswordFocus: boolean

  constructor() {
    
  }

  setEmailFocus(focus){
    this.EmailFocus = focus
  }

  setPasswordFocus(focus){
    this.PasswordFocus = focus
  }
}
