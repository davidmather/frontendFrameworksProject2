import {Component, Input} from '@angular/core';

@Component({selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})

export class CarouselComponent {
  href: String;
  @Input() images: any[];
  @Input() iterativeNumber;
  constructor() {
    this.href = '#carousel-' + this.iterativeNumber;
  }
}
