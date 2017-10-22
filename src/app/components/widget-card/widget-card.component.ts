import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget-card',
  templateUrl: './widget-card.component.html'
})
export class WidgetCardComponent {
  @Input() title: string

  constructor() {
    
  }
  

}
