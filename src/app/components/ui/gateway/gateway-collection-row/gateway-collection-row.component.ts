import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

// Model
import { Gateway } from '../../../../shared/models/data/gateway/gateway.model';

// Services
import { GatewayService } from 'src/app/core/services/gateway/gateway.service';

@Component({
  selector: 'gateway-collection-row',
  templateUrl: './gateway-collection-row.component.html',
  styleUrls: ['./gateway-collection-row.component.css']
})
export class GatewayCollectionRowComponent {

  @Input() gateway: Gateway | undefined = undefined;

  constructor(private router: Router, private gatewayService: GatewayService) {
    
  }

  editGateway(id: number) {
    this.router.navigateByUrl('gateway/' + id);
  }

  removeGateway(id: number) {
    this.gatewayService.deleteGateway(id).subscribe({
      next: () => {
        //this.getAllGateways();
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

}