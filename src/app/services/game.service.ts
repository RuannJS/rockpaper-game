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

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor() {}

  scissorsUrl = '../../assets/icon-scissors.svg';
  paperUrl = '../../assets/icon-paper.svg';
  rockUrl = '../../assets/icon-rock.svg';
  spockUrl = '../../assets/icon-spock.svg';
  lizardUrl = '../../assets/icon-lizard.svg';

  spockHtmlClass =
    'p-3 bg-white border-8 border-cyan-300 stance-image shadow-black shadow-xl shadow-inner ';
  lizardHtmlClass =
    'p-2 bg-white border-8 border-purple-500 stance-image  shadow-black shadow-xl shadow-inner ';
  rockHtmlClass =
    'left-60 p-2 bg-white border-8 border-red-500 stance-image  shadow-black shadow-xl shadow-inner  ';
  paperHtmlClass =
    'p-2 bg-white border-8 border-indigo-500 stance-image  shadow-black shadow-xl  shadow-inner ';
  scissorsHtmlClass =
    'bg-white border-8 border-yellow-500 stance-image  shadow-black shadow-xl  shadow-inner';

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
  randomStance: number = Math.ceil(Math.random() * 4);
  userStance!: Stance;
  houseStance: Stance = this.stanceArray[this.randomStance];

  onUserPick(stance: Stance) {
    this.userStance = stance;
  }

  confirmPick() {}

  compareStances(stance: Stance) {}
}
