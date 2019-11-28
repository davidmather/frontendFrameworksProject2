import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html'
})
export class AccordionComponent {
  toggled: boolean;
  href: string;
  @Input() title;
  @Input() iterativeNumber;
  @Input() imageCarousel;
  constructor() {
    this.toggled = false;
    this.href = '#accordion-' + this.iterativeNumber +
      ' .item-' + this.iterativeNumber;
  }
  _toggle() {
    this.toggled = !this.toggled;
  }
}
