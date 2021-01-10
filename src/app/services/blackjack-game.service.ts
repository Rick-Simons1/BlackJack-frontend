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
  //todo change all that use round to blackjackgame
  websocket: any;
  blackjackgame: BlackJackGame;

  constructor(){}

  connect() {

    let socket = new WebSocket("ws://localhost:8080/blackjackgame");
    this.websocket = Stomp.over(socket);
    let that = this;
    this.websocket.connect({}, function(frame) {
      that.websocket.subscribe("/client", function(message) {
        that.blackjackgame = JSON.parse(message.body);
      });
    }, function(error) {
      alert("STOMP error " + error);
    });
  }

  disconnect() {
    if (this.websocket != null) {
      this.websocket.ws.close();
    }
    console.log("Disconnected");
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

  //todo make this working
  addPlayer(player: Player){
    this.websocket.send('/app/addPlayer', {}, JSON.stringify(player));
  }

  checkWinner(){
    this.websocket.send('/app/checkWinner', {}, JSON.stringify(this.blackjackgame));
  }

  dealInitialCards(){
    this.websocket.send('/app/deal', {}, JSON.stringify(this.blackjackgame));


  }

  //todo make return value get added to player money
  giveWinnings(player: Player){
    this.websocket.send('/app/addPlayer', {}, JSON.stringify(player));


  }





}
