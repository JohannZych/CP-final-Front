import {Component, OnInit} from '@angular/core';
import {Advice} from "../models/advice.model";
import {AdviceService} from "../shared/advice.service";
import {User} from "../models/user.model";
import {UserService} from "../shared/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  userAuth!: User;
  model: Advice = new Advice(0, '', '', 0, this.userAuth);

  constructor(
    private adviceService: AdviceService,
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('userId')) {
      // @ts-ignore
      this.userService.getUserById(localStorage.getItem('userId')).subscribe(
        (user: User) => {
          this.userAuth = user;
          console.log(this.userAuth);
        }
      );
    }
  }

  onSubmit() {
    this.model.user = this.userAuth;
    this.adviceService.addAdvice(this.model);
    this.router.navigate(['/home']);
  }


}
