import { Component, OnInit } from '@angular/core';
import { LoggedInCallback } from '../services/cognito.service';
import { Router } from '../../../node_modules/@angular/router';
import { UserLoginService } from '../services/user-login.service';
import { GameState } from '../models/game-state';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { TeamType } from '../models/team-type.enum';
import { NgForm } from '../../../node_modules/@angular/forms';

interface TurnOption {
  value: number;
  display: string;
}

const turnOptions: Array<TurnOption> = [
  { value: 0, display: 'Unlimited' },
  { value: 30, display: '30 secs' },
  { value: 60, display: '1 min' },
  { value: (60 * 5), display: '5 mins' },
  { value: (60 * 10), display: '10 mins' },
  { value: (60 * 30), display: '30 mins' },
  { value: (60 * 60), display: '1 hr' },
  { value: (60 * 60 * 6), display: '6 hrs' },
  { value: (60 * 60 * 12), display: '12 hrs' },
  { value: (60 * 60 * 24), display: '1 day' },
  { value: (60 * 60 * 24 * 2), display: '2 days' },
  { value: (60 * 60 * 24 * 3), display: '3 days' },
  { value: (60 * 60 * 24 * 7), display: '7 days' },
];

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit, LoggedInCallback {
  game: GameState;
  player: CognitoUser;
  selectedTeam: TeamType;
  TeamType = TeamType;
  isPublic: boolean;
  privacy: string;
  turnOptions = turnOptions;

  constructor(public router: Router, public userService: UserLoginService) {
    this.userService.isAuthenticated(this);
    this.isPublic = true;
    this.privacy = 'Public';
  }

  ngOnInit() {
  }

  toggleTeam() {
    this.selectedTeam = (this.selectedTeam === TeamType.Natural) ? TeamType.Stained : TeamType.Natural;
  }

  togglePrivacy() {
    this.isPublic = !this.isPublic;
    this.privacy = this.isPublic ? 'Public' : 'Private';
  }

  createGame(form: NgForm) {
    console.log('Creating game "' + this.game.name + '"...');
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      return;
    }

    this.player = this.userService.cognitoUtil.getCurrentUser();
    this.player.getSession((err, session) => {
      if (err) {
        console.log(err);
        return;
      }

      const id = session.getIdToken();
      this.game = new GameState(id);
      this.selectedTeam = TeamType.Natural;
      this.game.turnLength = 0;
    });
  }
}
