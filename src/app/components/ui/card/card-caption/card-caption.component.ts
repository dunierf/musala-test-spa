import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-caption',
  templateUrl: './card-caption.component.html',
  styleUrls: ['./card-caption.component.css']
})
export class CardCaptionComponent {

  @Input() title: string | undefined = undefined;
  
}
