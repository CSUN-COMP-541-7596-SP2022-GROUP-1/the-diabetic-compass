import { Component, OnInit } from '@angular/core';

import { Alert } from 'src/app/interfaces/alert';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css'],
})
export class SignInPageComponent implements OnInit {
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
