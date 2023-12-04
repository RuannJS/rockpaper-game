export enum Stances {
  PAPER = 'paper',
  LIZARD = 'lizard',
  ROCK = 'rock',
  SCISSORS = 'scissors',
  SPOCK = 'spock',
}

export class Stance {
  public name!: Stances;
  public image!: string;
  public htmlClass!: string;

  constructor(name: Stances, image: string, htmlClass: string) {
    this.name = name;
    this.image = image;
    this.htmlClass = htmlClass;
  }

  public compareStances(value: Stances): number {
    var isWin!: number;

    return isWin;
  }
}

// 1 = WIN
// 0 = DRAW
// -1 = LOSS

export class Rock extends Stance {
  public override compareStances(value: Stances): number {
    var isWin!: number;

    switch (value) {
      case Stances.PAPER:
        isWin = -1;
        break;

      case Stances.LIZARD:
        isWin = 1;
        break;

      case Stances.SPOCK:
        isWin = -1;
        break;

      case Stances.SCISSORS:
        isWin = 1;
        break;
      case Stances.ROCK:
        isWin = 0;
        break;
    }

    return isWin;
  }
}

export class Scissors extends Stance {
  public override compareStances(value: Stances): number {
    var isWin!: number;

    switch (value) {
      case Stances.PAPER:
        isWin = 1;
        break;

      case Stances.LIZARD:
        isWin = 1;
        break;

      case Stances.SPOCK:
        isWin = -1;
        break;

      case Stances.ROCK:
        isWin = -1;
        break;
      case Stances.SCISSORS:
        isWin = 0;
        break;
    }

    return isWin;
  }
}

export class Paper extends Stance {
  public override compareStances(value: Stances): number {
    var isWin!: number;

    switch (value) {
      case Stances.SCISSORS:
        isWin = -1;
        break;

      case Stances.LIZARD:
        isWin = -1;
        break;

      case Stances.SPOCK:
        isWin = 1;
        break;

      case Stances.ROCK:
        isWin = 1;
        break;
      case Stances.PAPER:
        isWin = 0;
        break;
    }

    return isWin;
  }
}

export class Spock extends Stance {
  public override compareStances(value: Stances): number {
    var isWin!: number;

    switch (value) {
      case Stances.PAPER:
        isWin = -1;
        break;

      case Stances.LIZARD:
        isWin = -1;
        break;

      case Stances.ROCK:
        isWin = 1;
        break;

      case Stances.SCISSORS:
        isWin = 1;
        break;
      case Stances.SPOCK:
        isWin = 0;
        break;
    }

    return isWin;
  }
}

export class Lizard extends Stance {
  public override compareStances(value: Stances): number {
    var isWin!: number;

    switch (value) {
      case Stances.ROCK:
        isWin = -1;
        break;

      case Stances.SCISSORS:
        isWin = -1;
        break;

      case Stances.SPOCK:
        isWin = 1;
        break;

      case Stances.PAPER:
        isWin = 1;
        break;
      case Stances.LIZARD:
        isWin = 0;
        break;
    }

    return isWin;
  }
}
