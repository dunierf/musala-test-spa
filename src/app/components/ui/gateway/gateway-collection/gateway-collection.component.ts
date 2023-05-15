import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { GatewayService } from 'src/app/core/services/gateway/gateway.service';
import { Gateway } from 'src/app/shared/models/data/gateway/gateway.model';

@Component({
  selector: 'gateway-collection',
  templateUrl: './gateway-collection.component.html',
  styleUrls: ['./gateway-collection.component.css']
})
export class GatewayCollectionComponent implements OnInit {

  gateways: Gateway[] | null = null;

  constructor(private router: Router, private gatewayService: GatewayService) {
    
  }

  ngOnInit(): void {
    this.getAllGateways();
  }

  editGateway(id: number) {
    this.router.navigateByUrl('gateway/' + id);
  }

  removeGateway(id: number) {
    this.gatewayService.deleteGateway(id).subscribe({
      next: (response) => {
        this.getAllGateways();
      },
      error: (error) => {
        this.gateways = null;
        console.log(error);
      }
    });
  }

  getAllGateways() {
    this.gatewayService.getAll().subscribe({
      next: (response) => {
        this.gateways = response;
      },
      error: (error) => {
        this.gateways = null;
        console.log(error);
      }
    });
  }
  
}
