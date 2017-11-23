import { Component, Input } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

import { IUserCreate, IUserUpdate } from 'app/models'

@Component({
  selector: 'app-user-popup-page',
  templateUrl: './user-popup.page.html'
})
export class UserPopupPage {

  public admin: boolean

  @Input()
  set data(data){
    this.user = data.user
    this.type = data.type

    if (this.user.role == 'admin') {
      this.admin = true
    } else {
      this.admin = false
    }
  }

  public passwordA: string
  public passwordB: string
  public user: IUserCreate | IUserUpdate = <IUserCreate>{}
  public type: 'create' | 'edit'  

  constructor(private activeModal: NgbActiveModal) {

  }

  submit = () => {
    if (this.admin) {
      this.user.role = 'admin'
    } else {
      this.user.role = 'member'
    }
    if (this.passwordA === this.passwordB) {
      this.user.password = this.passwordA
    }    
    this.activeModal.close(this.user)
  }

  cancel = () => {
    this.activeModal.dismiss()
  }
}
