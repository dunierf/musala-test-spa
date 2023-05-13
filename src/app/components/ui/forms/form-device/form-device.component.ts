import { Component, Input } from '@angular/core';

// Model
import { Device } from '../../../../shared/models/data/device/device.model';

@Component({
  selector: 'form-device',
  templateUrl: './form-device.component.html',
  styleUrls: ['./form-device.component.css']
})
export class FormDeviceComponent {

  @Input() device: Device | undefined = undefined;

}
