import { Injectable } from '@angular/core';
import {Stomp} from 'stompjs/lib/stomp';
import {Round} from '../models/round';
import {Player} from '../models/player';
import {BlackJackGameComponent} from '../black-jack-game/black-jack-game.component';
import {BlackJackGame} from '../models/black-jack-game';

@Injectable({
  providedIn: 'root'
})
export class BlackjackGameService {
  websocket: any;
  blackjackgame: BlackJackGame;

  constructor(){}

  connect() {

    let socket = new WebSocket("ws://localhost:8080/blackjackgame");
    this.websocket = Stomp.over(socket);
    let that = this;
    this.websocket.connect({}, function(frame) {}, function(error) {
      alert("STOMP error " + error);
    });
  }

  disconnect() {
    if (this.websocket != null) {
      this.websocket.ws.close();
    }
    console.log("Disconnected");
  }

  sendHit(round: Round) {
    this.websocket.send('/app/hit', {}, JSON.stringify(round));
    this.getCurrentRound();
  }

  sendStand(round: Round) {
    this.websocket.send('/app/stand', {}, JSON.stringify(round));
    this.getCurrentRound();

  }

  sendSplit(round: Round) {
    this.websocket.send('/app/split', {}, JSON.stringify(round));
    this.getCurrentRound();

  }

  sendDouble(round: Round) {
    this.websocket.send('/app/double', {}, JSON.stringify(round));
    this.getCurrentRound();

  }

  createNewGame(player: Player) {
    this.websocket.send('/app/createGame', {}, JSON.stringify(player));
    this.getBlackjackGame();
  }

  nextRound(){
    this.websocket.send('/app/nextRound', {});
    this.getBlackjackGame();
  }

  //todo make this working
  addPlayer(player: Player){
    this.websocket.send('/app/addPlayer', {}, JSON.stringify(player));
  }

  checkWinner(round: Round){
    this.websocket.send('/app/checkWinner', {}, JSON.stringify(round));
    this.getCurrentRound();
  }

  dealInitialCards(round: Round){
    this.websocket.send('/app/dealCards', {}, JSON.stringify(round));
    this.getCurrentRound();

  }

  //todo make return value get added to player money
  giveWinnings(player: Player){
    this.websocket.send('/app/addPlayer', {}, JSON.stringify(player));


  }
  getBlackjackGame(){
    var that = this;
    this.websocket.subscribe("/client", function(message) {
      that.blackjackgame = message.body;
    });
  }

  getCurrentRound(){
    var that = this;
    this.websocket.subscribe("/client", function(message) {
      that.blackjackgame.currentRound = message.body;
    });
  }




}
