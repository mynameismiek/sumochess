import { Injectable } from '@angular/core';
import { Callback, CognitoUtil } from './cognito.service';

@Injectable({
  providedIn: 'root'
})
export class UserParametersService {

  constructor(public cognitoUtil: CognitoUtil) {
  }

  getParameters(callback: Callback) {
    const cognitoUser = this.cognitoUtil.getCurrentUser();

    if (cognitoUser != null) {
      cognitoUser.getSession(function (err, session) {
        if (err) {
          console.log('UserParametersService: Couldn\'t retrieve the user');
        } else {
          cognitoUser.getUserAttributes(function (err2, result) {
            if (err2) {
              console.log('UserParametersService: in getParameters: ' + err2);
            } else {
              callback.callbackWithParam(result);
            }
          });
        }
      });
    } else {
      callback.callbackWithParam(null);
    }
  }
}
