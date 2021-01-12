import {Component, Input, OnInit} from '@angular/core';
import {BlackjackGameService} from '../services/blackjack-game.service';
import {Card} from '../models/card';
import {Suits} from '../models/suits.enum';
import {CardValues} from '../models/card-values.enum';
import {Player} from '../models/player';
import {Router} from "@angular/router";

@Component({
  selector: 'app-black-jack-game',
  templateUrl: './black-jack-game.component.html',
  styleUrls: ['./black-jack-game.component.css']
})
export class BlackJackGameComponent implements OnInit {

  @Input() blackjackGameService: BlackjackGameService;

  player: Player;
  testpoints : number;

  constructor(/*blackjackServiceService: BlackjackGameService*/) {
    /*this.blackjackGameService = blackjackServiceService;*/
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
  /*connect(){
    this.blackjackGameService.connect();
  }
  creategame(player: Player){
    this.blackjackGameService.createNewGame(player);
  }
  test(){
    console.log(this.blackjackGameService);
  }

  testaddplayer(playerid: number){
    var player = new Player();
    player.id = playerid;
    player.username = "jantje";
    player.money = 100;
    this.blackjackGameService.addPlayer(player);
  }*/
  /*dealcards(){
    var that = this;

    that.blackjackGameService.dealInitialCards();
    /!*setTimeout(function() {
      that.blackjackGameService.blackjackgame.currentRound.players.forEach(player =>{
        if (player.blackjack){

        }
      });
    }, 30);*!/
  }*/

  /*hit(){
    var that = this;
    this.blackjackGameService.sendHit();
    setTimeout(function (){
      that.blackjackGameService.blackjackgame.currentRound.players.forEach(player1 =>{
        var player = new Player();
        player = player1;
        if (that.blackjackGameService.blackjackgame.currentRound.currentPlayer.id === player.id){
          if (player.splitBlackjack){
            console.log('split blackjack!')
            that.stand();
          }
          else if (player.blackjack){
            console.log('blackjack!')
            that.stand();
          }
          if (player.splitBust){
            console.log('splitbusted!')
            that.stand();
          }
          else if (player.bust){
            console.log('busted!')
            that.stand();
          }
        }
      })

    }, 30)
  }

  hitDealer(){
    this.blackjackGameService.sendHitDealer();
  }

  stand(){
    var that = this;
    this.blackjackGameService.sendStand();
    setTimeout(function (){
      if (that.blackjackGameService.blackjackgame.currentRound.dealersTurn === true){
        that.dealerScript()
      }
    },30);

  }

  double(){
    this.blackjackGameService.sendDouble();
  }

  split(){
    this.blackjackGameService.sendSplit();
  }

  dealerScript(){
    var that =this;
    console.log(this.blackjackGameService.blackjackgame.currentRound.dealer.totalCardPoints);

    if (this.blackjackGameService.blackjackgame.currentRound.dealer.totalCardPoints < 17){
      this.hitDealer();
      setTimeout(function (){
        that.dealerShowCorrectPoints;
      },50)
      setTimeout(function (){
        console.log('repeating script')
        that.dealerScript();
      },500)
    }
    else {
      setTimeout(function (){
        that.blackjackGameService.nextRound();
      },4900)
      setTimeout(function (){
        that.dealcards();
      },5000)
    }


  }

  dealerShowCorrectPoints(){
    if (this.blackjackGameService.blackjackgame.currentRound.dealersTurn){
      return this.blackjackGameService.blackjackgame.currentRound.dealer.totalCardPoints;
    }
    else {
      return this.blackjackGameService.blackjackgame.currentRound.dealer.visibleCard.cardPoints;
    }
  }*/

}
