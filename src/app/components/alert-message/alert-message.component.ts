import { Component, Input, OnInit } from '@angular/core';

import { AlertMessage as AlertMessageService } from 'app/services/alert-message.service';

import { IAlertMessage } from 'app/models/alert.message'

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html'
})
export class AlertMessageComponent implements OnInit {

  @Input()
  public alerts: Array<IAlertMessage> = [];

  constructor(private alertMessage: AlertMessageService) { }

  ngOnInit() {
    this.alerts = this.alertMessage.getAlerts();
  }

  public closeAlert(alert: IAlertMessage) {
    this.alertMessage.CloseAlert(alert);
  }

}
