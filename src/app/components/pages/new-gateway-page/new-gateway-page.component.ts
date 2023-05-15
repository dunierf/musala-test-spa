import { Component } from '@angular/core';

// Model
import { Gateway } from 'src/app/shared/models/data/gateway/gateway.model';

@Component({
  selector: 'app-new-gateway-page',
  templateUrl: './new-gateway-page.component.html',
  styleUrls: ['./new-gateway-page.component.css']
})
export class NewGatewayPageComponent {

  gateway: Gateway = {
    id: 0,
    name: '',
    serialNumber: '',
    ipV4Address: '',
    devices: []
  };

}
