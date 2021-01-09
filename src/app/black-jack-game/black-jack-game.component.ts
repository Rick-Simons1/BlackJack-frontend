import {Component, OnInit} from '@angular/core';
import {BlackjackGameService} from '../services/blackjack-game.service';
import {Card} from '../models/card';
import {Suits} from '../models/suits.enum';
import {CardValues} from '../models/card-values.enum';
import {Player} from '../models/player';

@Component({
  selector: 'app-black-jack-game',
  templateUrl: './black-jack-game.component.html',
  styleUrls: ['./black-jack-game.component.css']
})
export class BlackJackGameComponent implements OnInit {
  blackjackGameService: BlackjackGameService;
  pictureSource: string;
  cardPictureUrl: string;
  test = false;

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
 /* setBlackjackGame(){
    this.blackjackGame = this.blackjackGameService.blackjackgame;

  }*/

  testCreategame(){
    var player = new Player();
    player.id = 1;
    player.username = "pietje";
    player.money = 100;
    this.blackjackGameService.createNewGame(player);



  }
  dealcards(){
    var that = this;
    setTimeout(function() {
      that.blackjackGameService.dealInitialCards(that.blackjackGameService.blackjackgame);
    }, 1000);
  }




}
