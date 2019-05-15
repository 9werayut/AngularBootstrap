import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData = {
    email: "",
    password: ""
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Login() {
    if(this.loginData.email == "admin@gmail.com" && this.loginData.password == "1234"){
      this.router.navigate(['backend/dashboard']);
    } else {
      alert("login fail");
    }
  }

}
