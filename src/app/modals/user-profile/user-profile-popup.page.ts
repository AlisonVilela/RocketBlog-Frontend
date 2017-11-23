import { Component, Input } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

import { IUserUpdate } from 'app/models'

import { UserService } from 'app/services'

@Component({
  selector: 'app-user-profile-popup-page',
  templateUrl: './user-perfile-popup.page.html'
})
export class UserProfilePopupPage {

  @Input()
  set data(data){
    this.user._id = data._id
    this.user.name = data.name
    this.user.email = data.email
  }

  public passwordA: string
  public passwordB: string
  public user: IUserUpdate = <IUserUpdate>{}

  constructor(private activeModal: NgbActiveModal, private userService: UserService) {
    
  }

  submit = () => {
    if (this.passwordA === this.passwordB) {
      this.user.password = this.passwordA
    }
    this.userService.edit(this.user._id, this.user).subscribe(
      result => {
        this.activeModal.close(this.user)
      }
    )
  }

  cancel = () => {
    this.activeModal.dismiss()
  }
}
