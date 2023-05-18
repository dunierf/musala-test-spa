import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  title: string | undefined = undefined;

  showSideBar: boolean = false;

  onRouterOutletActive(title: string) {
    this.title = title;
    this.hideSidebarMenu();
  }

  showSidebarMenu() {
    this.showSideBar = true;
  }

  hideSidebarMenu() {
    this.showSideBar = false;
  }

}
