import { Component } from '@angular/core'

import { SessionService, UserService, ModalsService } from 'app/services'

import { UserProfilePopupPage } from 'app/modals'

import { IUser } from 'app/models'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html'
})
export class ProfilePageComponent {

  constructor(public sessionService: SessionService,
              private userService: UserService,
              private modalsService: ModalsService) {
  }

  edit() {
    this.modalsService.openForm(
      UserProfilePopupPage,
      {
        name: this.sessionService.me.name,
        email: this.sessionService.me.email
      },
      (result) => {
        this.sessionService.auth.setToken(result.token)
        this.sessionService.start()
      }
    )
  }
}
