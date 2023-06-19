import {Component, OnInit} from '@angular/core';
import {Advice} from "../models/advice.model";
import {AdviceService} from "../shared/advice.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  adviceList: Advice[] = [];
  advice!: Advice;

  constructor(
    private adviceService: AdviceService,
  ) {
  }

  ngOnInit(): void {
    this.adviceService.getAdvices().subscribe((res) => {
      this.adviceList = res;
    });


  }
}
