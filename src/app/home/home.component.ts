import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import {
  Lizard,
  Paper,
  Rock,
  Scissors,
  Spock,
  Stance,
  Stances,
} from '../entities/stance.class';
import { GameService } from '../services/game.service';
import { GameResult } from '../entities/game-status.enum';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private readonly gameService: GameService) {}

  // SCORE
  currentScore = this.gameService.currentScore;

  // GAME PHASES

  isPickPhase = true;
  isConfirmPhase = false;
  isComparePhase = false;
  showRules = false;

  // GAME RESULT

  gameResult!: GameResult;

  // USER STANCE
  currentSelectedStance!: Stance;

  // HOUSE STANCE
  currentHouseStance!: Stance;

  // STANCE DEFINITIONS
  scissorsUrl = '../../assets/icon-scissors.svg';
  paperUrl = '../../assets/icon-paper.svg';
  rockUrl = '../../assets/icon-rock.svg';
  spockUrl = '../../assets/icon-spock.svg';
  lizardUrl = '../../assets/icon-lizard.svg';

  // absolute -left-6 top-40
  // absolute -bottom-5 left-7
  // absolute -bottom-5 left-60
  // absolute top-40 -right-6
  // absolute top-8

  spockHtmlClass =
    ' p-4 bg-white border-8 border-cyan-300 stance-image shadow-black shadow-xl shadow-inner ';
  lizardHtmlClass =
    ' p-4 bg-white border-8 border-purple-500 stance-image  shadow-black shadow-xl shadow-inner ';
  rockHtmlClass =
    'p-4 bg-white border-8 border-red-500 stance-image  shadow-black shadow-xl shadow-inner  ';
  paperHtmlClass =
    'p-2 bg-white border-8 border-indigo-500 stance-image  shadow-black shadow-xl  shadow-inner ';
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

  toggleRules() {
    this.showRules = !this.showRules;
  }

  onUserPick(stance: Stance) {
    this.gameService.onUserPick(stance);
    this.currentSelectedStance = stance;
    this.currentHouseStance = this.gameService.houseStance;
    this.isConfirmPhase = true;
  }

  onUserConfirm() {
    this.gameService.compareStances();
    this.isComparePhase = true;
    this.isConfirmPhase = false;
    this.isPickPhase = false;
    this.gameResult = this.gameService.gameStatusMessage();
    this.currentScore = this.gameService.currentScore;
  }

  resetGamePhase() {
    this.isConfirmPhase = false;
    this.isConfirmPhase = false;
    this.isPickPhase = true;
  }
}
