import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {Observable} from "rxjs";
import {environment} from "../../environement/environement";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {
  }


  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment._API_USER_URL);
  }

  public getUserById(id: string): Observable<User> {
    return this.http.get<User>(environment._API_USER_URL.concat('/', id));
  }

  public addUser(newUser: User): void {
    // console.log(newUser);
    const headers: HttpHeaders = new HttpHeaders({'Content-type': 'application/json'});
    this.http.post<User>(environment._API_USER_URL.concat('/add'), newUser, {'headers': headers}).subscribe();
  }

  public editUser(updateUser: User): void {
    const headers: HttpHeaders = new HttpHeaders({'Content-type': 'application/json'});
    const body = JSON.stringify(updateUser);
    console.log(updateUser)
    this.http.put<User>(environment._API_USER_URL.concat('/put/') + localStorage.getItem('userId'), body, {'headers': headers}).subscribe();
  }

  public editUserByAdmin(updateUser: User): void {
    const headers: HttpHeaders = new HttpHeaders({'Content-type': 'application/json'});
    this.http.put<User>(environment._API_USER_URL.concat('/put/') + updateUser.id, updateUser, {'headers': headers}).subscribe();
  }

  public deleteUser(id: string): void {
    this.http.delete<User>(environment._API_USER_URL.concat('/delete/') + id).subscribe();
  }

}

