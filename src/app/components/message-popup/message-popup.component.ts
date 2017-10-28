import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-message-popup',
  templateUrl: './message-popup.component.html'
})
export class MessagePopupComponent {

  @Input() title;
  @Input() message;

  constructor(private activeModal: NgbActiveModal) {

  }

  submit() {
    this.activeModal.close(true)
  }

  cancel() {
    this.activeModal.dismiss()
  }
}
