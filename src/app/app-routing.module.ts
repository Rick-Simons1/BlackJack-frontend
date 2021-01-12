import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlackJackGameComponent} from './black-jack-game/black-jack-game.component';
import {LobbyComponent} from "./lobby/lobby.component";


const routes: Routes = [
  {path: 'lobby', component: LobbyComponent },
  {path: 'game', component: BlackJackGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

