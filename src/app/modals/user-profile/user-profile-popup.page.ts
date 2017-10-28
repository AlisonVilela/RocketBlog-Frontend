import { Component, Input } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

import { IUserUpdate } from 'app/models'

@Component({
  selector: 'app-user-profile-popup-page',
  templateUrl: './user-perfile-popup.page.html'
})
export class UserProfilePopupPage {

  @Input() data

  public passwordA: string
  public passwordB: string
  public user: IUserUpdate = <IUserUpdate>{}

  constructor(private activeModal: NgbActiveModal) {
    this.user.name = this.data.name
    this.user.email = this.data.email
  }

  submit = () => {
    if (this.passwordA === this.passwordB) {
      this.user.password = this.passwordA
    }    
    this.activeModal.close(this.user)
  }

  cancel = () => {
    this.activeModal.dismiss()
  }
}
