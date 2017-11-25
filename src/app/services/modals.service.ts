import { Injectable } from '@angular/core';

import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { MessagePopupComponent } from 'app/components';

@Injectable()
export class ModalsService {

  constructor(private modal: NgbModal) {
  }

  open(content, options: NgbModalOptions = {}): NgbModalRef {
    return this.modal.open(content, options)
  }

  openMessage(resolve) {
    const message = this.open(MessagePopupComponent)
    message.componentInstance.title = resolve.title || null
    message.componentInstance.message = resolve.message || null
 
    message.result.then(
      result => {
        if (resolve.submit) resolve.submit(true)
      },
      reason => {
        if (resolve.submit) resolve.submit(false)
      }
    );
  }

  openForm(popupForm, data, callBack, options?) {
    let form = this.open(popupForm, options)
    form.componentInstance.data = data
    form.result.then((result) => {
      if (callBack) callBack(result)
    }, (reason) => {
      if (callBack) callBack(false)
    });
  }
}
