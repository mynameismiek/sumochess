import { Component, OnInit } from '@angular/core';
import { UserLoginService } from './services/user-login.service';
import { LoggedInCallback, CognitoUtil } from './services/cognito.service';
import { Router, NavigationEnd } from '../../node_modules/@angular/router';
import { filter } from 'rxjs/operators';

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
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (!this.loggedIn) {
          this.loginService.isAuthenticated(this);
        }
      });
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
    this.router.navigateByUrl('/');
  }
}
