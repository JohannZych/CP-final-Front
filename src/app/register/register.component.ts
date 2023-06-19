import { Component } from '@angular/core';
import {UserService} from "../shared/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  createUser: any = [];

  constructor(
    private userService: UserService
  ) {
  }


  register() {
    console.log(this.createUser);
    return this.userService.addUser(this.createUser);
  }
}
