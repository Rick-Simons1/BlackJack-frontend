import { Injectable } from '@angular/core';
import {Stomp} from 'stompjs/lib/stomp';
import {Round} from '../models/round';
import {Player} from '../models/player';
import {BlackJackGameComponent} from '../black-jack-game/black-jack-game.component';
import {BlackJackGame} from '../models/black-jack-game';
import {BetDTO} from "../models/betDTO";

@Injectable({
  providedIn: 'root'
})
export class BlackjackGameService {
  websocket: any;
  blackjackgame: BlackJackGame;
  playerWinners = [];
  betPhase: boolean;
  showSecondCard: boolean;

  constructor(){

  }

  connect() {

    let socket = new WebSocket("ws://localhost:8080/blackjackgame");
    this.websocket = Stomp.over(socket);
    let that = this;
    this.websocket.connect({}, function(frame) {
      that.websocket.subscribe("/client", function(message) {
        if (message !== undefined){
            console.log("normal game")
            that.blackjackgame = JSON.parse(message.body);
            if (that.blackjackgame.currentRound.currentPlayer.id === 999){
              that.sendAiStart();
            }
            else {
              if (that.blackjackgame.currentRound.dealersTurn === true){
                that.dealerScript();
              }
              // @ts-ignore
              if (that.blackjackgame.currentRound.players[0].blackjack === true){
                // @ts-ignore
                if (that.blackjackgame.currentRound.currentPlayer.id === that.blackjackgame.currentRound.players[0].id){
                  console.log('blackjack!')
                  that.stand();
                }

              }
            }
        }
        else {
          console.log("response was undefined")
        }
      });
    }, function(error) {
      console.log(error);
      that.connect();
    });
  }

  disconnect() {
    if (this.websocket != null) {
      this.websocket.ws.close();
    }
    console.log("Disconnected");

  }

  hit(){
    var that = this;
    this.sendHit();
    setTimeout(function (){
      that.blackjackgame.currentRound.players.forEach(player1 =>{
        var player = new Player();
        player = player1;
        if (that.blackjackgame.currentRound.currentPlayer.id === player.id){
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

  stand(){
    var that = this;
    this.sendStand();
      /*setTimeout(function (){
        if (that.blackjackgame.currentRound.dealersTurn === true){
          that.dealerScript()
        }
      },30);*/

  }

  dealerScript(){
    var that =this;
    console.log(this.blackjackgame.currentRound.dealer.totalCardPoints);
    this.showSecondCard = true;
    if (this.blackjackgame.currentRound.dealer.totalCardPoints < 17){
      this.sendHitDealer();
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
        that.checkWinner();
      },100)
      setTimeout(function (){
        that.displayWinners();
      },300)
      setTimeout(function (){
        that.playerWinners = [];
        that.nextRound();
        that.betPhase = true;
        that.showSecondCard = false;
      },4500)
      setTimeout(function (){
        that.betPhase = false;
        that.dealInitialCards();
      },5000)
    }


  }

  displayWinners(){
    this.blackjackgame.currentRound.players.forEach(playerx => {
      let player: Player;
      player = playerx;
      if (player.win === true){
        // @ts-ignore
        this.playerWinners.push(player);
        console.log(player);
      }
    })
  }

  checkwinners(){
    var that = this;
    this.checkWinner();
    setTimeout(function (){
      console.log(that.blackjackgame.currentRound.players)
    })

  }


  dealerShowCorrectPoints(){
    if (this.showSecondCard){
      return this.blackjackgame.currentRound.dealer.totalCardPoints;
    }
    else {
      return this.blackjackgame.currentRound.dealer.visibleCard.cardPoints;
    }
  }



  sendHit() {
    this.websocket.send('/app/hit', {}, JSON.stringify(this.blackjackgame));
  }

  sendHitDealer() {
    this.websocket.send('/app/hitDealer', {}, JSON.stringify(this.blackjackgame));
  }

  sendStand() {
    this.websocket.send('/app/stand', {}, JSON.stringify(this.blackjackgame));

  }

  sendSplit() {
    this.websocket.send('/app/split', {}, JSON.stringify(this.blackjackgame));

  }

  sendDouble() {
    this.websocket.send('/app/double', {}, JSON.stringify(this.blackjackgame));

  }

  createNewGame(player: Player) {
    this.websocket.send('/app/createGame', {}, JSON.stringify(player));

  }

  nextRound(){
    this.websocket.send('/app/nextRound', {}, JSON.stringify(this.blackjackgame));
  }

  addPlayer(player: Player){
    this.websocket.send('/app/addPlayer', {}, JSON.stringify(player));
  }

  removePlayer(player: Player){
    var betDTO: BetDTO;
    betDTO = new BetDTO();
    betDTO.player = player;
    betDTO.blackjackgame= this.blackjackgame;
    this.websocket.send('/app/removePlayer', {}, JSON.stringify(betDTO));
  }

  checkWinner(){
    this.websocket.send('/app/checkWinner', {}, JSON.stringify(this.blackjackgame));
  }

  dealInitialCards(){
    this.websocket.send('/app/deal', {}, JSON.stringify(this.blackjackgame));


  }

  setBet(player: Player, bet: number){
    var betDTO: BetDTO;
    betDTO = new BetDTO();
    betDTO.bet = bet;
    betDTO.player = player;
    betDTO.blackjackgame= this.blackjackgame;
    this.websocket.send('/app/bet', {}, JSON.stringify(betDTO));

  }



  sendAiStart(){
    this.websocket.send('/app/aiStart', {}, JSON.stringify(this.blackjackgame));

  }






}
