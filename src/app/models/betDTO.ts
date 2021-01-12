import {Player} from "./player";
import {BlackJackGame} from "./black-jack-game";

export class BetDTO{
  blackjackgame: BlackJackGame;
  player: Player;
  bet: number;
}
