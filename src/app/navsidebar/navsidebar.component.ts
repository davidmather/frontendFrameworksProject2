import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navsidebar',
  templateUrl: './navsidebar.component.html',
  styles: ['ul { border: none;width: 100%; }']
})

export class NavsidebarComponent implements OnInit{
  links = [
    {
      href: '#PortfolioOfWork',
      text: 'Portfolio of Work',
      icon: 'fa fa-briefcase'
    }, {
      href: '#AboutMe',
      text: 'About Me',
      icon: 'fa fa-university'
    }, {
      href: '#Services',
      text: 'Services',
      icon: 'fa fa-cubes'
    }, {
      href: '#Contact',
      text: 'Contact',
      icon: 'fa fa-phone'
    }, {
      href: '#Blog',
      text: 'Blog',
      icon: 'fa fa-envelope'
    }, {
      href: '#Quote',
      text: 'Quote',
      icon: 'fa fa-comment'
    },
  ];

  constructor() {}
  @Output() sendDataToParent = new EventEmitter<string>();
  ngOnInit() {
    console.log('Component init');
  }

  _sendDataToParent(data: string) {
    this.sendDataToParent.emit(data);
  }

}
