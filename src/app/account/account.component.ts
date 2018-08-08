import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  userEmail:string = sessionStorage.getItem("email");
  userID:string = sessionStorage.getItem("id");
  userBirth:string = sessionStorage.getItem("birth");
  userAge:string = sessionStorage.getItem("age");
  userPass:string = sessionStorage.getItem("pass");


  constructor(private router:Router) { }

  ngOnInit() {
  }

  logoutEvent(event) {
    event.preventDefault();
    console.log("Logged out");
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
