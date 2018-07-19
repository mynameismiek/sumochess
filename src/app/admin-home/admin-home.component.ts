import { Component, OnInit } from '@angular/core';
import { LoggedInCallback } from '../services/cognito.service';
import { Router } from '../../../node_modules/@angular/router';
import { UserLoginService } from '../services/user-login.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit, LoggedInCallback {

  constructor(public router: Router, public userService: UserLoginService) {
    this.userService.isAuthenticated(this);
  }

  ngOnInit() {
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
    const user = this.userService.cognitoUtil.getCurrentUser();
    user.getSession(function(err, session) {
      if (err) {
        console.log(err);
        this.router.navigate(['/login']);
        return;
      }
      const groups = session.getIdToken().payload['cognito:groups'];
      if (!groups.includes('admins')) {
        console.log('ACCESS DENIED');
        this.router.navigate(['/login']);
        return;
      }
    });

    if (!isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }
}
