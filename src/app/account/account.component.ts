import { Component, OnInit } from '@angular/core';
import { LoggedInCallback } from '../services/cognito.service';
import { Router } from '../../../node_modules/@angular/router';
import { UserLoginService } from '../services/user-login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit, LoggedInCallback {

  constructor(public router: Router, public userService: UserLoginService) {
    this.userService.isAuthenticated(this);
  }

  ngOnInit() {
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }
}
