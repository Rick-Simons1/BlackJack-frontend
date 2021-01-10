import {Card} from './card';

export class Dealer {
  cards: [];
  visibleCard: Card;
  totalCardPoints: number;
  containsAce: boolean;
  blackjack: boolean;
  bust: boolean;

  constructor() {
  }
}
