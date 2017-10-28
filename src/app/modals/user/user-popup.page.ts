import { Component, Input } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

import { IUserCreate, IUserUpdate } from 'app/models'

@Component({
  selector: 'app-user-popup-page',
  templateUrl: './user-popup.page.html'
})
export class UserPopupPage {

  @Input()
  set setData(data){
    this.user = data.user
    this.type = data.type
  }

  public passwordA: string
  public passwordB: string
  public user: IUserCreate | IUserUpdate = <IUserCreate>{}
  public type: 'create' | 'edit'  

  constructor(private activeModal: NgbActiveModal) {

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
