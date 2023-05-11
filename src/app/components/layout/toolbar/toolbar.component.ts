import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  @Input() title: string | undefined;
  @Output() showSidebarMenu = new EventEmitter();

  showMenu() {
    this.showSidebarMenu.emit();
  }
}
