import { Component } from '@angular/core';
import { SessionService } from 'app/services'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private sessionService: SessionService) {
    
  }
}
