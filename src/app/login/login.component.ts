import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoAuthService } from 'dist/sumochess/cognito-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(public router: Router, 
              public cognitoAuthService: CognitoAuthService) { }

  ngOnInit() {
  }

  login() {
    this.cognitoAuthService.signIn(this.email, this.password, this.onSuccess, this.onError);
  }

  onSuccess() {

  }

  onError() {

  }
}