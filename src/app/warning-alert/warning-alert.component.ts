import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: '<p>Alert! Danger Here</p>',
  styles: [
    `
      p {
        color: red;
        font-weight: bold;
      }
    `,
  ],
})
export class WarningAlertComponent {}
