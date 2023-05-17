import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

// Model
import { Device } from '../../../../shared/models/data/device/device.model';
import { DeviceStatus } from 'src/app/shared/models/data/device/device-status.model';



@Component({
  selector: 'form-device',
  templateUrl: './form-device.component.html',
  styleUrls: ['./form-device.component.css'],
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class FormDeviceComponent {

  @Input() device: Device = {
    id: 0,
    uId: 0,
    vendor: '',
    statusId: 1
  };
  
  @Input() deviceStatus:  DeviceStatus [] = [];

}
