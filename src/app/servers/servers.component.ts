import { Component } from '@angular/core';

@Component({
  // By tag
  selector: 'app-servers',
  // By attribute
  // selector: '[app-servers]',
  // by class
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  // inline template Single Line
  // template:
  //   '<app-server></app-server><app-server></app-server><app-server></app-server><app-server></app-server>',

  // inline template Multi Line
  // But you need template property
  // template: ` <app-server></app-server>
  //   <app-server></app-server>
  //   <app-server></app-server>
  //   <app-server></app-server>`,

  styleUrl: './servers.component.css',
})
export class ServersComponent {
  servers = ['server1', 'server2'];
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverModel = '';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverName = '';
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
