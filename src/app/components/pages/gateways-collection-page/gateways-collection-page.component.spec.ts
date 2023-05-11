import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewaysCollectionPageComponent } from './gateways-collection-page.component';

describe('GatewaysCollectionPageComponent', () => {
  let component: GatewaysCollectionPageComponent;
  let fixture: ComponentFixture<GatewaysCollectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewaysCollectionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatewaysCollectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
