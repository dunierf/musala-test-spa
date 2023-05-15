import { Component, OnInit } from '@angular/core';

// Services
import { GatewaysService } from 'src/app/core/services/gateways/gateways.service';

@Component({
  selector: 'app-gateways-collection-page',
  templateUrl: './gateways-collection-page.component.html',
  styleUrls: ['./gateways-collection-page.component.css']
})
export class GatewaysCollectionPageComponent implements OnInit {

  constructor(private gatewaysService: GatewaysService) {
    
  }

  ngOnInit(): void {
    //this.gatewaysService.getAll()
  }



}
