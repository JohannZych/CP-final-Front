import {Component, OnInit} from '@angular/core';
import {Signup} from "../models/signup.model";
import {UserService} from "../shared/user.service";
import {User} from "../models/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  model: Signup = new Signup();
  userSession!: User;
  userAuth!: User;


  constructor(
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
        }
      );
    }
  }

  login() {
    this.userService.getUserByEmail(this.model.email).subscribe(
      (user: User) => {
        this.userSession = user;
        if (this.userSession.password === this.model.password) {
          alert('Vous êtes connecté');
          localStorage.setItem('userId', this.userSession.id.toString());
          this.router.navigate(['/home']);
        } else {
          alert('Mot de passe ou Email invalide');
        }
      }
    );
  }

  logout() {
    localStorage.removeItem('userId');
    this.router.navigate(['/home']);
  }

  protected readonly localStorage = localStorage;
}
