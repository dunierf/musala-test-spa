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
    id: 0,
    name: '',
    serialNumber: '',
    ipv4: '',
    devices: []
  };

  addDevice() {
    const device: Device = {
      id: 0,
      uid: 0,
      vendor: '',
      statusId: 1
    };

    this.gateway?.devices?.push(device);
  }

  removeDevice(index: number) {
    this.gateway.devices?.splice(index, 1);
  }

  cancel() {
    this.gateway.devices = [];
  }

  onSubmit() {
    console.log(this.gateway);
  }
  
}
