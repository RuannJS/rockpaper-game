export enum GameStatus {
  WIN = 'win',
  DRAW = 'draw',
  LOSE = 'lose',
}

export interface GameResult {
  message: string;
  button: string;
}
