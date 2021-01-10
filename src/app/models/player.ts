export class Player {
  id: number;
  username: string;
  money: number;
  cards: [];
  splitCards: [];
  currentBet: number;
  currentSplitBet: number;
  containsSplit: boolean;
  totalCardPoints: number;
  totalSplitCardPoints: number;
  containsAce: boolean;
  splitContainsAce: boolean;
  blackjack: boolean;
  splitBlackjack: boolean;
  bust: boolean;
  splitbust: boolean;

  constructor() {
  }
}
