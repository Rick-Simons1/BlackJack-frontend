import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlackJackGameComponent} from './black-jack-game/black-jack-game.component';


const routes: Routes = [
  {path: 'game', component: BlackJackGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
