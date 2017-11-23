import { Component, Input } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

import { IPostCreate, IPostUpdate } from 'app/models'

@Component({
  selector: 'app-post-popup-page',
  templateUrl: './post-popup.page.html'
})
export class PostPopupPage {

  @Input()
  set data(data){
    this.post = data.post
    this.type = data.type
  }

  public passwordA: string
  public passwordB: string
  public post: IPostCreate | IPostUpdate = <IPostCreate>{}
  public type: 'create' | 'edit'

  constructor(private activeModal: NgbActiveModal) {

  }

  submit = () => {
    this.activeModal.close(this.post)
  }

  cancel = () => {
    this.activeModal.dismiss()
  }
}
