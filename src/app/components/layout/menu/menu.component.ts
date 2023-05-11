import { Component, Input } from '@angular/core';

// Models
import { ItemMenu } from '../../../shared/models/menu/item-menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Input() items: ItemMenu [] | undefined = undefined;
  
}
