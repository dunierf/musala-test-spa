import { Component } from '@angular/core';

// Models
import { ItemMenu } from '../../../shared/models/menu/item-menu.model';
import { items } from '../../../shared/models/menu/menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  items: ItemMenu[] = items;

}
