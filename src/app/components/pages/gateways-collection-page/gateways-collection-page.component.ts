import { Component, OnInit } from '@angular/core';

// Services
import { GatewayService } from 'src/app/core/services/gateway/gateway.service';

@Component({
  selector: 'app-gateways-collection-page',
  templateUrl: './gateways-collection-page.component.html',
  styleUrls: ['./gateways-collection-page.component.css']
})
export class GatewaysCollectionPageComponent implements OnInit {

  constructor(private gatewaysService: GatewayService) {
    
  }

  ngOnInit(): void {
    //this.gatewaysService.getAll()
  }



}
