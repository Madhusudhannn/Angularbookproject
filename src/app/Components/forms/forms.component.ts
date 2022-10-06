import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  
  user = {
   username: "",
    password:""
  }
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  save(){
    // console.log(this.name);
    // console.log(this.age);
    if(this.user.username=="")
    {
      alert("Please enter username")
    }
    else if(this.user.password=="")
    {
      alert("Please enter password")
    }
    else
    {
    const observable = this.userService.createUser(this.user);
    observable.subscribe(
      (response:any) => {
        console.log(response);
        sessionStorage.setItem('credentials',JSON.stringify(response));
        this.router.navigate(['Bookform']);

      },
      function(error){
        alert("something went wrong please try again")  
      }
      )
    }
    
  }

  

}
