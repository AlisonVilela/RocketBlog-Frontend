import { Injectable } from '@angular/core';

import { IAlertMessage } from 'app/models'

@Injectable()
export class AlertMessage {
  alerts: Array<IAlertMessage> = [];
  constructor() { }

  getAlerts() {
    return this.alerts;
  }

  addAlert(alert: IAlertMessage) {
    this.alerts.push(alert);
    setTimeout(() => this.CloseAlert(alert), 4200);
  }

  CloseAlert(alert: IAlertMessage) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
}
