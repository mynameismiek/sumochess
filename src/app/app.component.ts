import { Component, OnInit } from '@angular/core';
import { UserLoginService } from './services/user-login.service';
import { LoggedInCallback, CognitoUtil } from './services/cognito.service';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, LoggedInCallback {
  title = 'Sumo Chess';
  loggedIn: boolean;
  username: string;

  constructor(public loginService: UserLoginService, public cognitoUtil: CognitoUtil, public router: Router) {
    this.loggedIn = false;
  }

  ngOnInit() {
    this.loginService.isAuthenticated(this);
  }

  isLoggedIn(message: string, loggedIn: boolean): void {
    this.loggedIn = loggedIn;
    const user = this.cognitoUtil.getCurrentUser();
    this.username = user != null ? user.getUsername() : '';
  }

  logout(): void {
    this.loginService.logout();
    this.loginService.isAuthenticated(this);
    this.router.navigateByUrl('/home');
  }
}
