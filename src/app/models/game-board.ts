import { Directions } from "./directions.enum";

export class GameBoard {
    //  null,  null, space, space, space, space, space, null
    // space, space, space, space, space, space, space, space
    // space, space, space, space, space, space, space, space
    //  null, space, space, space, space, space,  null,  null
    canPush(space: number, dir: Directions): boolean {
        return true;
    }
}
