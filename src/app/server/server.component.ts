import { Component } from '@angular/core';

@Component({
  // selector should be unique
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      p {
        color: pink;
      }
    `,
  ],
})
export class ServerComponent {}
