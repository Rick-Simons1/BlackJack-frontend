import { Component, OnInit } from '@angular/core';
import {LobbyService} from "../services/lobby.service";
import {Player} from "../models/player";
import {BlackJackGameComponent} from "../black-jack-game/black-jack-game.component";
import {Router} from "@angular/router";
import {BlackjackGameService} from "../services/blackjack-game.service";

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  lobbyService: LobbyService;
  blackjackgameService: BlackjackGameService;
  player: Player;
  playerbet: number;



  constructor(lobbyService: LobbyService, blackjackgameservice: BlackjackGameService) {
    this.lobbyService = lobbyService;
    this.blackjackgameService =blackjackgameservice;
    this.player = new Player()
    this.player.money = 1000;
  }

  ngOnInit() {
  }

  createNewGame(){
    var that = this;

    this.blackjackgameService.connect();
    setTimeout(function (){
      that.blackjackgameService.createNewGame(that.player);

    }, 100)
    setTimeout(function (){
      that.blackjackgameService.setBet(that.player, that.playerbet);

    }, 400)
    setTimeout(function (){
      that.blackjackgameService.dealInitialCards();

    }, 2000)


  }
  log(){
    console.log(this.playerbet);
  }
  joinGame(){
    var that = this;

    this.blackjackgameService.connect();
    setTimeout(function (){
      that.blackjackgameService.addPlayer(that.player)
    }, 40)
  }
  onSubmit(){
    console.log(this.player)
  }

  bet(){
    console.log('sending bet');
    this.blackjackgameService.setBet(this.player, this.playerbet);
  }

  leaveGame(){
    this.blackjackgameService.removePlayer(this.player)
  }


  addAiPlayer()
  {
    var player = new Player();
    player.id = 999;
    player.username = 'aiPlayer'
    player.money = 10000;
    this.blackjackgameService.addPlayer(player);
  }

  removeAiPlayer()
  {
    var player = new Player();
    player.id = 999;
    this.blackjackgameService.removePlayer(player);
  }


}
