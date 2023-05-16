import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// Model
import { Gateway } from '../../../../shared/models/data/gateway/gateway.model';
import { Device } from '../../../../shared/models/data/device/device.model';
import { DeviceStatus } from '../../../../shared/models/data/device/device-status.model';

// Services
import { DeviceStatusService } from '../../../../core/services/device/device-status/device-status.service';



@Component({
  selector: 'form-gateway',
  templateUrl: './form-gateway.component.html',
  styleUrls: ['./form-gateway.component.css']
})
export class FormGatewayComponent implements OnInit {

  deviceStatus: DeviceStatus[] = [];

  @Input() gateway: Gateway = {
    id: 0,
    name: '',
    serialNumber: '',
    ipV4Address: '',
    devices: []
  };

  constructor(private deviceStatusService: DeviceStatusService) {
    
  }

  ngOnInit(): void {
    this.getAllDeviceStatus();
  }

  addDevice() {
    const device: Device = {
      id: 0,
      uid: 0,
      vendor: '',
      statusId: 1
    };

    this.gateway.devices.push(device);
  }

  removeDevice(index: number) {
    this.gateway.devices?.splice(index, 1);
  }

  cancel() {
    this.gateway.devices = [];
  }

  onSubmit() {
    if (this.gateway.id)
      this.updateGateway();
    else
      this.createGateway();
  }

  createGateway() {
    console.log('Create gateway');
    console.log(this.gateway);
  }

  updateGateway() {
    console.log('Update gateway');
    console.log(this.gateway);
  }
  
  getAllDeviceStatus() {
    this.deviceStatusService.getAll().subscribe({
      next: (deviceStatus) => {
        this.deviceStatus = deviceStatus;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

}
