import { Injectable } from '@angular/core';

import { Piece } from '../enums/Piece'
import { Result } from '../enums/Result';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getWinner(humanChoice: Piece, computerChoice: Piece) {
    let result = Result.Tie;

    if (humanChoice == computerChoice) {
      result = Result.Tie;
    } else {
      switch (humanChoice) {
        case Piece.Rock:
          if (computerChoice == Piece.Scissors) {
            result = Result.Human;
          } else {
            result = Result.Computer;
          }

          break;
        case Piece.Paper:
          if (computerChoice == Piece.Rock) {
            result = Result.Human;
          } else {
            result = Result.Computer;
          }

          break;
        case Piece.Scissors: 
          if (computerChoice == Piece.Paper) {
            result = Result.Human;
          } else {
            result = Result.Computer;
          }

          break;
      }
    }
    return result;
  }
}