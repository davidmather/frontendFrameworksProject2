import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dataFromChild;
  activeSection = 'PortfolioOfWork';
  eventFromChild(data) {
    data = data.replace('#', '');
    this.activeSection = data;
    console.log(data);
  }
}
