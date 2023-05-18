import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { ItemMenu } from '../../../shared/models/menu/item-menu.model';
import { items } from '../../../shared/models/menu/menu';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  title: string | undefined = undefined;

  items: ItemMenu [] = items;

  @Output() onRouterOutletActive: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) {
    
  }

  onActivate() {
    this.onRouterOutletActive.emit(this.findActiveLinkTitle(this.router.url.substring(1), this.items));
  }

  findActiveLinkTitle(link: string, items: ItemMenu []) : string | undefined {
    const title = items.find(item => item.link == link)?.title;

    if (title)
      return title;

    if (link.substring(0, 8) == "gateway/")
      return "Editing a gateway";
    
    return undefined;
  }
}
