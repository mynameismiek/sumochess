import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../../services/user-login.service';
import { LoggedInCallback } from '../../services/cognito.service';
import { Router } from '@angular/router';
import { DynamoDBService } from '../../services/ddb.service';


export class Stuff {
    public type: string;
    public date: string;
}

@Component({
    selector: 'app-user-activity',
    templateUrl: './user-activity.component.html',
    styleUrls: ['./user-activity.component.css']
})
export class UserActivityComponent implements LoggedInCallback {

    public logdata: Array<Stuff> = [];

    constructor(public router: Router, public ddb: DynamoDBService, public userService: UserLoginService) {
        this.userService.isAuthenticated(this);
        console.log('in UseractivityComponent');
    }

    isLoggedIn(message: string, isLoggedIn: boolean) {
        if (!isLoggedIn) {
            this.router.navigate(['/login']);
        } else {
            console.log('scanning DDB');
            this.ddb.getLogEntries(this.logdata);
        }
    }
}
