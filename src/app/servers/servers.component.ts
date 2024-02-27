import { Component } from '@angular/core';

@Component({
  // By tag
  selector: 'app-servers',
  // By attribute
  // selector: '[app-servers]',
  // by class
  // selector: '.app-servers',

  // inline template Single Line
  // template:
  //   '<app-server></app-server><app-server></app-server><app-server></app-server><app-server></app-server>',

  // inline template Multi Line
  // But you need template property
  template: ` <app-server></app-server>
    <app-server></app-server>
    <app-server></app-server>
    <app-server></app-server>`,

  styleUrl: './servers.component.css',
})
export class ServersComponent {}
