import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';
import { Piece } from '../enums/Piece';
import { Result } from '../enums/Result';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('rock should tie against rock', () => {
    let winner = service.getWinner(Piece.Rock, Piece.Rock)
    expect(winner).toEqual(Result.Tie);
  });

  it('paper should tie against paper', () => {
    let winner = service.getWinner(Piece.Paper, Piece.Paper)
    expect(winner).toEqual(Result.Tie);
  });

  it('scissors should tie against scissors', () => {
    let winner = service.getWinner(Piece.Scissors, Piece.Scissors)
    expect(winner).toEqual(Result.Tie);
  });

  it('rock should win against scissors', () => {
    let winner = service.getWinner(Piece.Rock, Piece.Scissors)
    expect(winner).toEqual(Result.Human);
  });

  it('rock should lose against paper', () => {
    let winner = service.getWinner(Piece.Rock, Piece.Paper)
    expect(winner).toEqual(Result.Computer);
  });

  it('paper should win against rock', () => {
    let winner = service.getWinner(Piece.Paper, Piece.Rock)
    expect(winner).toEqual(Result.Human);
  });

  it('paper should lose against scissors', () => {
    let winner = service.getWinner(Piece.Paper, Piece.Scissors)
    expect(winner).toEqual(Result.Computer);
  });

  it('scissors should win against paper', () => {
    let winner = service.getWinner(Piece.Scissors, Piece.Paper)
    expect(winner).toEqual(Result.Human);
  });

  it('scissors should lose against rock', () => {
    let winner = service.getWinner(Piece.Scissors, Piece.Rock)
    expect(winner).toEqual(Result.Computer);
  });
});
