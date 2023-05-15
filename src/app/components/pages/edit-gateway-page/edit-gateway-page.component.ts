import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Model
import { Gateway } from '../../../shared/models/data/gateway/gateway.model';

// Services
import { GatewayService } from '../../../core/services/gateway/gateway.service';


@Component({
  selector: 'app-edit-gateway-page',
  templateUrl: './edit-gateway-page.component.html',
  styleUrls: ['./edit-gateway-page.component.css']
})
export class EditGatewayPageComponent implements OnInit {

  id: number = 0;

  gateway: Gateway | null = null;

  constructor(private route: ActivatedRoute, 
             private gatewayService: GatewayService) {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getGateway(params['id']);
    });
  }

  getGateway(id: number) {
    this.gatewayService.getById(id).subscribe({
      next: (gateway) => {
        this.gateway = gateway;
      },
      error: (error) => {
        this.gateway = null;
      }
    });
  }

}
