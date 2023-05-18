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

  @Input() id: number = 0;
  
  gateway: Gateway = {
    id: null,
    name: '',
    serialNumber: '',
    ipV4Address: '',
    devices: []
  };

  alertMessage: string = '';
  
  alertType: string = 'success';

  constructor(private deviceStatusService: DeviceStatusService, 
              private gatewayService: GatewayService) {
    
  }

  ngOnInit(): void {
    this.getAllDeviceStatus();

    if (this.id)
      this.getGateway(this.id);
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
      id: 0,
      uId: null,
      vendor: null,
      statusId: 1
    };

    this.gateway?.devices.push(device);
    console.log(this.gateway);
  }

  removeDevice(index: number) {
    this.gateway?.devices.splice(index, 1);
  }

  removeAllDevices() {
    this.gateway.devices = [];
  }
  
  onSubmit(gatewayForm: NgForm) {
    if (this.gateway.id)
      this.updateGateway();
    else
      this.createGateway(gatewayForm);
  }

  createGateway(gatewayForm: NgForm) {
    this.gatewayService.postGateway(this.gateway).subscribe({
      next: (gateway: Gateway) => {
        gatewayForm.resetForm();
        this.removeAllDevices();
        this.successMessage('Gateway successfully created!!!');
      },
      error: (error: any) => {
        this.errorMessage('Error');
        console.log(error);
      }
    });
  }

  updateGateway() {
    this.gatewayService.putGateway(this.id, this.gateway).subscribe({
      next: (gateway: Gateway) => {
        this.gateway = gateway;
        this.successMessage('Gateway successfully updated!!!');
      },
      error: (error: any) => {
        this.errorMessage('Error');
        console.log(error);
      }
    });
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

  successMessage(text: string) {
    this.alertMessage = text;
    this.alertType = "success";
  }

  errorMessage(text: string) {
    this.alertMessage = text;
    this.alertType = "danger";
  }

  onCloseAlert() {
    this.alertMessage = '';
  }

}
