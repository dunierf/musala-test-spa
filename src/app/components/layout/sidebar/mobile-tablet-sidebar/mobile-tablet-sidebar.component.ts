import { Component, Input, Output, EventEmitter, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-mobile-tablet-sidebar',
  templateUrl: './mobile-tablet-sidebar.component.html',
  styleUrls: ['./mobile-tablet-sidebar.component.css'],
  animations: [
    trigger('showHide', [
      state('show', style({
        transform: 'translateX(0)'
      })),
      state('hidden', style({
        transform: 'translateX(-110%)'
      })),
      transition('show => hidden', [
        animate('0.4s ease-in')
      ]),
      transition('hidden => show', [
        animate('0.4s ease-out')
      ])
    ])
  ]
})
export class MobileTabletSidebarComponent implements OnChanges {

  @Input() showSideBar: boolean = false;

  showBackground: boolean = false;

  @Output() showSideBarChange = new EventEmitter<boolean>();

  showHide: string = 'hidden';
  
  hide() {
    this.showHide = 'hidden';
  }

  show() {
    this.showBackground = true;
    this.showHide = 'show';
  }
  
  sideBarAnimationDone() {
    if (this.showHide == 'hidden') {
      this.showBackground = false;
      this.showSideBarChange.emit(false);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const show = changes['showSideBar']?.currentValue;
    
    if (show != undefined)
    {
        if (show)
          this.show();
        else
          this.hide();
    }
  }
  
}
