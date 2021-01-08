import { TestBed } from '@angular/core/testing';

import { BlackjackGameService } from './blackjack-game.service';

describe('BlackjackGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlackjackGameService = TestBed.get(BlackjackGameService);
    expect(service).toBeTruthy();
  });
});
