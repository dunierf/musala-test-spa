import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

// Model
import { Gateway } from '../../../../shared/models/data/gateway/gateway.model';
import { Device } from '../../../../shared/models/data/device/device.model';


@Component({
  selector: 'form-gateway',
  templateUrl: './form-gateway.component.html',
  styleUrls: ['./form-gateway.component.css']
})
export class FormGatewayComponent {

  @Input() gateway: Gateway = {
    
  };

  AddDevice() {
    const device: Device = {
      id: undefined,
      uid: undefined,
      vendor: '',
      status: 'online'
    };

    this.gateway?.devices?.push(device);
  }

  onSubmit() {
    console.log(this.gateway);
  }

}
