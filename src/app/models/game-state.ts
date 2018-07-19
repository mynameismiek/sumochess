import { TeamType } from './team-type.enum';
import { Time } from '@angular/common';
import { TimeInterval } from 'rxjs';
import { PieceType } from './piece-type.enum';
import { GameStateType } from './game-state-type.enum';

export class GameState {
    name: string;
    isPrivate: boolean;
    turnLength: number;

    // user 1
    player1: string;
    player1Team: TeamType;
    player1MoveCount: number;
    player1PushCount: number;
    player1PiecesPushedCount: number;
    player1MoveTime: Date;

    // user 2
    player2: string;
    player2Team: TeamType;
    player2MoveCount: number;
    player2PushCount: number;
    player2PiecesPushedCount: number;
    player2MoveTime: Date;

    // game state
    playerTurn: string;
    // where the pieces are at
    gameState: GameStateType;

    playerWhoWon: string;
    piecePushedOff: PieceType;
    edgePushedOff: number;

    constructor(player1Id: string) {
        this.player1 = player1Id;
        this.gameState = GameStateType.Setup;
    }
}
