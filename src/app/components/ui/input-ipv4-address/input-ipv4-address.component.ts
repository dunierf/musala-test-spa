import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-ipv4-address',
  templateUrl: './input-ipv4-address.component.html',
  styleUrls: ['./input-ipv4-address.component.css']
})
export class InputIpv4AddressComponent {

  @Input() ipv4: string | undefined = undefined;

  octects: number [] = [0, 0, 0, 0];

}
