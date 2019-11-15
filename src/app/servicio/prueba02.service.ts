import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Prueba02Service {
  urlAObtener: string;

  constructor(
    private http: HttpClient
  ) {
    this.urlAObtener = environment.urlBack;
  }
  llamame(): Observable<any>{
    console.log(this.urlAObtener);
    return this.http.get(this.urlAObtener + 'comments');
  }
}
