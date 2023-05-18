import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayCollectionRowComponent } from './gateway-collection-row.component';

describe('GatewayCollectionRowComponent', () => {
  let component: GatewayCollectionRowComponent;
  let fixture: ComponentFixture<GatewayCollectionRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewayCollectionRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatewayCollectionRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
