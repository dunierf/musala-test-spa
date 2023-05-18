import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-gateway-page',
  templateUrl: './edit-gateway-page.component.html',
  styleUrls: ['./edit-gateway-page.component.css']
})
export class EditGatewayPageComponent implements OnInit {

  id: number = 0;

  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id']);
    });
  }
  
}
