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
  }

  loginEvent(event) {
    event.preventDefault();
    if (this.email == "reid" && this.password == "pass") {
      this.router.navigateByUrl('/account');
    } else {
      alert('Username or password are incorrect.');
    }

  }
}
