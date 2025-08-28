export type GameSymbol = 'x' | 'o';

export type GameCell = GameSymbol | null;
export type GameCellClickHandler = (id: number) => void;

export type GameBoard = GameCell[];
export type GameBoardSize = 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface GameState {
  size: GameBoardSize;
  cells: GameBoard;
  currentPlayer: GameSymbol;
  currentGameTime: number;
  winner: GameSymbol | null | 'draw';
  totalGames: number;
}
