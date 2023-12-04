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
  currentScore = 0;

  // GAME PHASES

  isPickPhase = true;
  isConfirmPhase = false;
  isComparePhase = false;

  // USER PICKED

  currentSelectedStance!: string;

  // STANCE DEFINITIONS
  scissorsUrl = '../../assets/icon-scissors.svg';
  paperUrl = '../../assets/icon-paper.svg';
  rockUrl = '../../assets/icon-rock.svg';
  spockUrl = '../../assets/icon-spock.svg';
  lizardUrl = '../../assets/icon-lizard.svg';

  spockHtmlClass =
    'absolute -left-6 top-40 p-4 bg-white border-8 border-cyan-300 stance-image shadow-black shadow-xl shadow-inner ';
  lizardHtmlClass =
    'absolute -bottom-5 left-7 p-4 bg-white border-8 border-purple-500 stance-image  shadow-black shadow-xl shadow-inner ';
  rockHtmlClass =
    'absolute -bottom-5 left-60 p-4 bg-white border-8 border-red-500 stance-image  shadow-black shadow-xl shadow-inner  ';
  paperHtmlClass =
    'absolute top-40 -right-6 p-4 bg-white border-8 border-indigo-500 stance-image  shadow-black shadow-xl  shadow-inner ';
  scissorsHtmlClass =
    'absolute top-8 p-4 bg-white border-8 border-yellow-500 stance-image  shadow-black shadow-xl  shadow-inner';

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

  onUserPick(stance: Stance) {
    this.gameService.onUserPick(stance);
    this.currentSelectedStance = stance.name;
    this.isConfirmPhase = true;
  }
}
