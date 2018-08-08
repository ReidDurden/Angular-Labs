import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = '';
  password:string = '';

  constructor(private router:Router, private form:FormsModule) { }

  ngOnInit() {
    console.log(sessionStorage.getItem("email"));
  }

  loginEvent(event) {
    event.preventDefault();

    if (this.email == "reid" && this.password == "pass") {
      this.router.navigateByUrl('/account');
      if(typeof(Storage) != "undefined") {
        console.log("storage ready");
        sessionStorage.setItem("email", this.email);
        sessionStorage.setItem("id", "1");
        sessionStorage.setItem("birth", "29/10/98");
        sessionStorage.setItem("age", "19");
        sessionStorage.setItem("pass", this.password);
        console.log(sessionStorage.getItem("email"), sessionStorage.getItem("id"),
        sessionStorage.getItem("birth"),sessionStorage.getItem("age"), sessionStorage.getItem("pass"));
      } else {
        alert("local storage is not available");
      }
    } else {
      alert('Username or password are incorrect.');
    }

  }
}
