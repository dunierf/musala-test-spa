import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGatewayPageComponent } from './edit-gateway-page.component';

describe('EditGatewayPageComponent', () => {
  let component: EditGatewayPageComponent;
  let fixture: ComponentFixture<EditGatewayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGatewayPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGatewayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
