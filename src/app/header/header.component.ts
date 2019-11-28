import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ['header { background-color: #561717; }']
})
export class HeaderComponent {
  title = 'David Mather';
  number = '08945556896';
  email = 'david.mather@mycit.ie';
  constructor() {}
}
