import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  createUser(user: { username: string; password: string; }) {
    return this.http.post(this.BASE_URL+'/signin', user);
  }
  signup(user: { username: string; password: string; email: string; }): import("rxjs").Observable<any> {
    return this.http.post(this.BASE_URL+'/signup', user);
  }
  
  BASE_URL = "http://localhost:8010/api/auth";
  
  
  constructor(private http: HttpClient) { }
}
