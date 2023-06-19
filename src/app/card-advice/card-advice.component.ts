import {Component, Input} from '@angular/core';
import {Advice} from "../models/advice.model";

@Component({
  selector: 'app-card-advice',
  templateUrl: './card-advice.component.html',
  styleUrls: ['./card-advice.component.scss']
})
export class CardAdviceComponent {

  @Input()
  advice!: Advice;

}
