import { Component, OnInit } from '@angular/core';
import {BlackjackGameService} from '../services/blackjack-game.service';
import {Player} from '../models/player';
import {BlackJackGame} from '../models/black-jack-game';
import {timeout} from 'rxjs/operators';

@Component({
  selector: 'app-black-jack-game',
  templateUrl: './black-jack-game.component.html',
  styleUrls: ['./black-jack-game.component.css']
})
export class BlackJackGameComponent implements OnInit {
  blackjackGameService: BlackjackGameService;
  blackjackGame: BlackJackGame;

  constructor(blackjackServiceService: BlackjackGameService) {
    this.blackjackGameService = blackjackServiceService;
  }

  ngOnInit() {
  }

  /*test(){
    var that = this;
    let player = new Player();
    player.id = 1;
    player.money = 100;
    player.username = 'pietje';

    this.blackjackGameService.createNewGame(player);
    setTimeout(function() {
      that.setBlackjackGame();
    }, 10);
  }*/
  setBlackjackGame(){
    this.blackjackGame = this.blackjackGameService.blackjackgame;

  }


}
