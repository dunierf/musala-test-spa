import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// Model
import { Gateway } from '../../../../shared/models/data/gateway/gateway.model';
import { Device } from '../../../../shared/models/data/device/device.model';
import { DeviceStatus } from '../../../../shared/models/data/device/device-status.model';

// Services
import { DeviceStatusService } from '../../../../core/services/device/device-status/device-status.service';
import { GatewayService } from '../../../../core/services/gateway/gateway.service';



@Component({
  selector: 'form-gateway',
  templateUrl: './form-gateway.component.html',
  styleUrls: ['./form-gateway.component.css']
})
export class FormGatewayComponent implements OnInit {

  deviceStatus: DeviceStatus[] = [];

  @Input() id: number | null = null;

  gateway: Gateway = {
    id: null,
    name: '',
    serialNumber: '',
    ipV4Address: '',
    devices: []
  };

  constructor(private deviceStatusService: DeviceStatusService, 
              private gatewayService: GatewayService) {
    
  }

  ngOnInit(): void {
    this.getAllDeviceStatus();
  }

  getGateway(id: number) {
    this.gatewayService.getById(id).subscribe({
      next: (gateway) => {
        this.gateway = gateway;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  addDevice() {
    const device: Device = {
      id: null,
      uid: null,
      vendor: null,
      statusId: 1
    };

    this.gateway?.devices.push(device);
    console.log(this.gateway);
  }

  removeDevice(index: number) {
    this.gateway?.devices.splice(index, 1);
  }

  cancel() {
    this.gateway.devices = [];
  }

  onSubmit() {
    console.log(this.gateway);

    /*if (this.gateway.id)
      this.updateGateway();
    else
      this.createGateway();*/
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
