import { Component, OnInit } from '@angular/core';
import { ComputerPlayerService } from 'src/app/services/computer-player.service';
import { GameService } from 'src/app/services/game.service';
import { Result } from 'src/app/enums/Result';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
  message = '';
  humanChoice = -1;
  computerChoice = -1;
  winner = 0;

  loading = false;
  showResult = false;

  humanScore = 0;
  computerScore = 0;

  constructor(private computerPlayerService: ComputerPlayerService, private gameService: GameService) { }

  ngOnInit(): void {
  }

  userPick(playerChoice: number): void {
    this.humanChoice = playerChoice;

    this.loading = true;

    this.computerPlayerService.getComputerPlayerChoice().subscribe(computerChoice => {

      this.loading = false;

      this.computerChoice = computerChoice

      this.winner = this.calculateWinner(this.humanChoice, this.computerChoice)
      
      this.showResult = true;
    })
  }

  private calculateWinner(humanChoice: number, computerChoice: number): number {

    this.winner = this.gameService.getWinner(humanChoice, computerChoice)

    if(this.winner == Result.Human) {
      this.humanScore += 1;
    } else if (this.winner == Result.Computer) {
      this.computerScore += 1;
    }

    return this.winner;
  }

  resetScore() {
    this.humanScore = 0;

    this.computerScore = 0;

    this.showResult = false;

    this.humanChoice = -1;

    this.computerChoice = -1;
  }
}