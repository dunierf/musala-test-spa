import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
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
        transform: 'translateX(-100%)'
      })),
      state('initial', style({
        transform: 'translateX(-100%)'
      })),
      transition('show => hidden', [
        animate('0.4s ease-in')
      ]),
      transition('hide => show', [
        animate('0.4s ease-out')
      ]),
      transition('initial => show', [
        animate('0.4s ease-out')
      ])
    ])
  ]
})
export class MobileTabletSidebarComponent implements OnInit {

  @Input() showSideBar: boolean = false;

  @Output() showSideBarChange = new EventEmitter<boolean>();

  showHide: string = 'initial';
  
  hideSidebar() {
    this.showHide = 'hidden';
  }

  ngOnInit(): void {
    setTimeout( () => { this.showHide = 'show'; }, 20);
  }

  sideBarAnimationDone() {
    if (this.showHide == 'hidden')
      setTimeout( () => { 
        this.showSideBar = false; 
        this.showSideBarChange.emit(this.showSideBar); 
      }, 10);
  }

}
