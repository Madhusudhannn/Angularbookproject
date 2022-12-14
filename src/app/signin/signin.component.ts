import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

 
user = {

  username: "madhu",

  password: "123456"

}

signin() {

  if(this.user.username=="")

  {

    alert("Please enter username")

  }

  else if(this.user.password=="")

  {

    alert("Please Enter Password")

  }

  else{

  // console.log(this.Username);

  // console.log(this.Password)

  const observable = this.userService.signin(this.user);

  observable.subscribe(



    (Response: any) => {

     

     

      console.log(Response);
      alert("User successfully signed")

      sessionStorage.setItem('credentials', JSON.stringify(Response));

     // this.router.navigate(['']);

    },



    function (error) {

      alert("Something went wrong Please try again")

    }

  )

  }

}

constructor(private userService: UserService , private router:Router) { }

ngOnInit(): void {

}
}