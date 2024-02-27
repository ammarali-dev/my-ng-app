import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  showDetails = false;
  logs = [];

  toggleShowDetails(event: Event) {
    console.log(event.timeStamp);
    let i: number = this.logs.length;
    this.logs.push(event.timeStamp);
    this.showDetails = !this.showDetails;
  }
}
