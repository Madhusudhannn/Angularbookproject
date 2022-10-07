import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  
  BASE_URL = "http://localhost:8010/api/auth";
  signin(user :any){

    return this.http.post(this.BASE_URL+'/signin',user);

  }
  signup(user: { username: string; password: string; email: string; }) {
    return this.http.post(this.BASE_URL+'/signup', user);
  }
  

  
  
  constructor(private http: HttpClient) { }
}
