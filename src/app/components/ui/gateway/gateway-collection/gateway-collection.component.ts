import { Component, Inject, OnInit } from '@angular/core';

// Model
import { Gateway } from 'src/app/shared/models/data/gateway/gateway.model';

// Services
import { GatewayService } from 'src/app/core/services/gateway/gateway.service';


@Component({
  selector: 'gateway-collection',
  templateUrl: './gateway-collection.component.html',
  styleUrls: ['./gateway-collection.component.css']
})
export class GatewayCollectionComponent implements OnInit {

  gateways: Gateway[] | null = null;

  constructor(private gatewayService: GatewayService) {
    
  }

  ngOnInit(): void {
    this.getAllGateways();
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
