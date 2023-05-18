import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGatewayPageComponent } from './new-gateway-page.component';

describe('NewGatewayPageComponent', () => {
  let component: NewGatewayPageComponent;
  let fixture: ComponentFixture<NewGatewayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGatewayPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewGatewayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
