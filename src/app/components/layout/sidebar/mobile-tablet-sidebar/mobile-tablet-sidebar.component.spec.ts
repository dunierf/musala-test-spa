import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTabletSidebarComponent } from './mobile-tablet-sidebar.component';

describe('MobileTabletSidebarComponent', () => {
  let component: MobileTabletSidebarComponent;
  let fixture: ComponentFixture<MobileTabletSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileTabletSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileTabletSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
