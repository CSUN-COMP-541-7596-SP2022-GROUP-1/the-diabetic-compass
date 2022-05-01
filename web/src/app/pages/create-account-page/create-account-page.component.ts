import { Component, OnInit } from '@angular/core';

import { Alert } from 'src/app/interfaces/alert';

@Component({
  selector: 'app-create-account-page',
  templateUrl: './create-account-page.component.html',
  styleUrls: ['./create-account-page.component.css'],
})
export class CreateAccountPageComponent implements OnInit {
  alerts: Alert[] = [];
  constructor() {}

  ngOnInit(): void {}

  showAlerts(alerts: Alert[]) {
    this.alerts = alerts;
  }

  onCloseAlert(alertId: string) {
    this.alerts = [...this.alerts.filter((alert) => alert.id !== alertId)];
  }
}
