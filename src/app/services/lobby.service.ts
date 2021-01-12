import { Injectable } from '@angular/core';
import {BlackJackGameComponent} from "../black-jack-game/black-jack-game.component";
import {Player} from "../models/player";
import {Stomp} from 'stompjs/lib/stomp';
import {BlackJackGame} from "../models/black-jack-game";


@Injectable({
  providedIn: 'root'
})
export class LobbyService {
  games:[];
  blackjackgame: BlackJackGame;
  websocket: any;


  constructor() { }

  connect() {

    let socket = new WebSocket("ws://localhost:8080/blackjackgame");
    this.websocket = Stomp.over(socket);
    let that = this;
    this.websocket.connect({}, function(frame) {
      that.websocket.subscribe("/client", function(message) {
        if (message !== undefined){
          // @ts-ignore
          that.blackjackgame = JSON.parse(message.body);
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

  addGame(blackjackGame: BlackJackGameComponent){
    // @ts-ignore
    this.games.push(blackjackGame);
  }

  getGames(){

  }

  createNewGame(player: Player) {
    this.websocket.send('/app/createGame', {}, JSON.stringify(player));
  }



}
