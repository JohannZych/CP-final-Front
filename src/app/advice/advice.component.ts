import {Component, OnInit} from '@angular/core';
import {AdviceService} from "../shared/advice.service";
import {UserService} from "../shared/user.service";
import {Advice} from "../models/advice.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.scss']
})
export class AdviceComponent implements OnInit{

  adviceList!: Advice[];

  constructor(
    private adviceService: AdviceService,
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {

    if (localStorage.getItem('userId')) {
        this.adviceService.getAdviceByUser(localStorage.getItem('userId') as string).subscribe((res: Advice[]) => {
          this.adviceList = res;
        });
    } else {
      this.router.navigate(['/profile']);
    }
  }

  newPost() {
    this.router.navigate(['/post-form']);
  }
}
