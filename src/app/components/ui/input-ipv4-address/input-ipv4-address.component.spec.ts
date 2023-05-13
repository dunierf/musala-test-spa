import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputIpv4AddressComponent } from './input-ipv4-address.component';

describe('InputIpv4AddressComponent', () => {
  let component: InputIpv4AddressComponent;
  let fixture: ComponentFixture<InputIpv4AddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputIpv4AddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputIpv4AddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
