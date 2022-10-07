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
    email: 'madhu@gmail.com',
    role: ""
  }
  user1 = {

    username: "",

    password: "",

    email: "",

    role: [""]



  }
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  signup() {
    if (this.user.username == "") {
      alert("Please enter username")
    }
    else if (this.user.password == "") {
      alert("Please enter password")
    }
    else if (this.user.email == "") {
      alert("Please enter email")
    }

    else {
      this.user1.username = this.user.username;
      this.user1.email = this.user.email;
      this.user1.password = this.user.password;
      const result: any[] = [];
      result[0] = this.user.role;
      this.user1.role = result;
      const observable: Observable<any> = this.userService.signup(this.user1);
      observable.subscribe(
        response => {//success function
          console.log(response);
          sessionStorage.setItem('credentials', JSON.stringify(response));
          this.router.navigate(['signin']);

        },

        error => {
          console.log(error);

        }

      )
    }
  }


}
