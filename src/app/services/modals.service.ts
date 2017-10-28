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
        if (resolve.submit) resolve.submit()
      },
      reason => {

      }
    );
  }

  openForm(popupForm, data, callBack) {
    let form = this.open(popupForm)
    form.componentInstance.setData = data
    form.result.then((result) => {
      if (callBack) callBack(result)
    }, (reason) => {

    });
  }
}
