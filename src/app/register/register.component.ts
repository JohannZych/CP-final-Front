import { Component } from '@angular/core';
import {UserService} from "../shared/user.service";
import {User} from "../models/user.model";
import {NewUser} from "../models/newUser.model";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  model: NewUser = new NewUser()
  newUser: User = new User();

  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }


  register() {
    console.log(this.model);
    this.newUser.setFirstname(this.model.firstname);
    this.newUser.setLastname(this.model.lastname);
    this.newUser.setEmail(this.model.email);
    this.newUser.setPassword(this.model.password);
    this.userService.addUser(this.newUser);
    alert("Votre compte a bien été créé");
    return this.router.navigate(['/profile']);
  }
}
