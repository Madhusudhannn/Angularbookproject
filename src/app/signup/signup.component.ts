import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    username: "madhu",
    password: "12345",
    email:'madhu@gmail.com'
  }
  
  signup() {
    const observable: Observable<any> = this.userService.signup(this.user);
    observable.subscribe(
      response =>{//success function
        console.log(response);
        sessionStorage.setItem('credentials',JSON.stringify(response));
        this.router.navigate(['signin']);

      },

      error=>{
        console.log(error);
        
      }

    )
  }
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

}
