import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '../../services/user-login.service';
import { CognitoCallback, LoggedInCallback } from '../../services/cognito.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, CognitoCallback, LoggedInCallback {
  email: string;
  password: string;
  errorMsg: string;

  constructor(public router: Router,
    public userService: UserLoginService) { }

  ngOnInit() {
    console.log('Checking if the user is already authenticated. If so, then redirect to the secure site');
    this.userService.isAuthenticated(this);
  }

  onLogin() {
    if (this.email == null || this.password == null) {
      this.errorMsg = 'All fields are required';
      return;
    }
    this.errorMsg = null;
    this.userService.authenticate(this.email, this.password, this);
  }

  cognitoCallback(message: string, result: any): void {
    if (message != null) { // error
      this.errorMsg = message;
      console.log('result: ' + this.errorMsg);
      if (this.errorMsg === 'User is not confirmed.') {
        console.log('redirecting');
        this.router.navigate(['/home/confirmRegistration', this.email]);
      } else if (this.errorMsg === 'User needs to set password.') {
        console.log('redirecting to set new password');
        this.router.navigate(['/home/newPassword']);
      }
    } else { // success
      // this.ddb.writeLogEntry('login');
      this.router.navigate(['/securehome']);
    }
  }

  isLoggedIn(message: string, loggedIn: boolean): void {
    if (loggedIn) {
      this.router.navigate(['/securehome']);
    }
  }
}
