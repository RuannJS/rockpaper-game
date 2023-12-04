import { Injectable } from '@angular/core';
import { Stance } from '../entities/stance.class';
import {
  Stances,
  Scissors,
  Spock,
  Paper,
  Rock,
  Lizard,
} from '../entities/stance.class';
import { GameResult, GameStatus } from '../entities/game-status.enum';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  // DATA
  scissorsUrl = '../../assets/icon-scissors.svg';
  paperUrl = '../../assets/icon-paper.svg';
  rockUrl = '../../assets/icon-rock.svg';
  spockUrl = '../../assets/icon-spock.svg';
  lizardUrl = '../../assets/icon-lizard.svg';

  spockHtmlClass =
    ' p-4 bg-white border-8 border-cyan-300 stance-image shadow-black shadow-xl shadow-inner ';
  lizardHtmlClass =
    ' p-4 bg-white border-8 border-purple-500 stance-image  shadow-black shadow-xl shadow-inner ';
  rockHtmlClass =
    'p-4 bg-white border-8 border-red-500 stance-image  shadow-black shadow-xl shadow-inner  ';
  paperHtmlClass =
    'p-4 bg-white border-8 border-indigo-500 stance-image  shadow-black shadow-xl  shadow-inner ';
  scissorsHtmlClass =
    'p-4 bg-white border-8 border-yellow-500 stance-image  shadow-black shadow-xl  shadow-inner';

  scissors: Scissors = new Scissors(
    Stances.SCISSORS,
    this.scissorsUrl,
    this.scissorsHtmlClass
  );
  rock: Rock = new Rock(Stances.ROCK, this.rockUrl, this.rockHtmlClass);
  paper: Paper = new Paper(Stances.PAPER, this.paperUrl, this.paperHtmlClass);
  spock: Spock = new Spock(Stances.SPOCK, this.spockUrl, this.spockHtmlClass);
  lizard: Lizard = new Lizard(
    Stances.LIZARD,
    this.lizardUrl,
    this.lizardHtmlClass
  );

  stanceArray: Stance[] = [
    this.rock,
    this.paper,
    this.scissors,
    this.spock,
    this.lizard,
  ];

  currentScore: number = 0;
  userStance!: Stance;
  houseStance!: Stance;
  gameStatus!: GameStatus;

  // METHODS
  // Returns a random index between 0 and 4
  randomStance(): number {
    return Math.ceil(Math.random() * 4);
  }

  // When user clicks a Stance
  onUserPick(stance: Stance): void {
    this.userStance = stance;

    // Generates a random House Stance
    const generateHouseStance = () => {
      this.houseStance = this.stanceArray[this.randomStance()];
    };

    generateHouseStance();
  }

  // Compares User vs. House
  compareStances(): void {
    const result = this.userStance.compareStances(this.houseStance.name);

    switch (result) {
      case 1:
        this.gameStatus = GameStatus.WIN;
        break;
      case 0:
        this.gameStatus = GameStatus.DRAW;
        break;
      case -1:
        this.gameStatus = GameStatus.LOSE;
        break;
    }
  }

  gameStatusMessage(): GameResult {
    var gameResult!: GameResult;

    if (this.gameStatus === GameStatus.WIN) {
      gameResult = { message: 'you win', button: 'play again' };
      this.currentScore++;
    } else if (this.gameStatus === GameStatus.DRAW) {
      gameResult = { message: 'draw', button: 'try again' };
    } else {
      gameResult = { message: 'you lost', button: 'try again' };
      this.currentScore = 0;
    }

    return gameResult;
  }
}
