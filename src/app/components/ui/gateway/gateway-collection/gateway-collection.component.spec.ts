import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayCollectionComponent } from './gateway-collection.component';

describe('GatewayCollectionComponent', () => {
  let component: GatewayCollectionComponent;
  let fixture: ComponentFixture<GatewayCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewayCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatewayCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
