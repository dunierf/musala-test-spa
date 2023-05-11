import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  title: string | undefined = undefined;

  onRouterOutletActive(title: string) {
    this.title = title;
  }

}
