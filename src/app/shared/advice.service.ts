import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {Observable} from "rxjs";
import {environment} from "../../environement/environement";
import {Advice} from "../models/advice.model";


@Injectable({
  providedIn: 'root'
})

export class AdviceService {

  constructor(private http: HttpClient) {
  }


  public getAdvices(): Observable<Advice[]> {
    return this.http.get<Advice[]>(environment._API_ADVICE_URL);
  }

  public getAdviceById(id: string): Observable<Advice> {
    return this.http.get<Advice>(environment._API_ADVICE_URL.concat('/', id));
  }

  public addAdvice(newAdvice: Advice): void {
    const headers: HttpHeaders = new HttpHeaders({'Content-type': 'application/json'});
    this.http.post<Advice>(environment._API_ADVICE_URL.concat('/add'), newAdvice, {'headers': headers}).subscribe();
  }

  public editAdvice(updateAdvice: Advice, id: string): void {
    const headers: HttpHeaders = new HttpHeaders({'Content-type': 'application/json'});
    const body = JSON.stringify(updateAdvice);
    this.http.put<Advice>(environment._API_ADVICE_URL.concat('/update/') + id, body, {'headers': headers}).subscribe();
  }


  public deleteAdvice(id: string): void {
    this.http.delete<Advice>(environment._API_ADVICE_URL.concat('/delete/') + id).subscribe();
  }

}


