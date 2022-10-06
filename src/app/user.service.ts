import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL = "http://43.206.125.23:8010/api/auth";
  createUser(user: { username: string; password: string; }) {
    return this.http.post(this.BASE_URL+'/signin', user);
  }
  signup(user: { username: string; password: string; email: string; }): import("rxjs").Observable<any> {
    return this.http.post(this.BASE_URL+'/signup', user);
  }
  

  
  
  constructor(private http: HttpClient) { }
}
