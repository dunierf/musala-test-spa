import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  title: string | undefined = undefined;

  @Output() onRouterOutletActive: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) {
    
  }

  onActivate() {
    // find active link title
  }
}
