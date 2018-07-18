import { Injectable } from '@angular/core';
import { AuthenticationDetails, 
         CognitoUser, 
         CognitoUserPool } from 'amazon-cognito-identity-js';
import { environment  } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CognitoAuthService {
  userPool: CognitoUserPool;

  constructor() {
    var poolData = {
      UserPoolId: environment.cognito.userPoolId,
      ClientId: environment.cognito.userPoolClientId
    };
    this.userPool = new CognitoUserPool(poolData);
  }

  private createCognitoUser(email): CognitoUser {
    return new CognitoUser({
      Username: this.toUsername(email),
      Pool: this.userPool
    });
  }

  private toUsername(email): string {
    return email.replace('@', '-at-');
  }

  signIn(email: string, password: string, onSuccess: VoidFunction, onFailure: VoidFunction) {
    var authenticationDetails = new AuthenticationDetails({
        Username: this.toUsername(email),
        Password: password
    });

    var cognitoUser = this.createCognitoUser(email);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: onSuccess,
        onFailure: onFailure
    });
  }

  signOut() {
    this.userPool.getCurrentUser().signOut();
  }
}
