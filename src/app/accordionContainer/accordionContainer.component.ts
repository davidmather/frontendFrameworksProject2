import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion-container',
  templateUrl: './accordionContainer.component.html'
})
export class AccordionContainerComponent {
  toggled: boolean;
  constructor() {
    this.toggled = false;
  }
  _toggle() {
    this.toggled = !this.toggled;
  }
}
