import { Component, Input } from '@angular/core';

// Model
import { Device } from '../../../../shared/models/data/device/device.model';
import { DeviceStatus } from 'src/app/shared/models/data/device/device-status.model';

@Component({
  selector: 'form-device',
  templateUrl: './form-device.component.html',
  styleUrls: ['./form-device.component.css']
})
export class FormDeviceComponent {

  @Input() device: Device = {
    id: 0,
    uid: 0,
    vendor: '',
    statusId: 1
  };

  @Input() deviceStatus:  DeviceStatus [] = [];

}
