import type { GameSymbol } from '@/shared/model/types';

export type GameCell = GameSymbol | null;
export type GameCellClickHandler = (id: number) => void;

export type GameBoard = GameCell[];
export type GameBoardSize = 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type Winner = GameSymbol | null | 'draw';

export interface GameState {
  cells: GameBoard;
  currentPlayer: GameSymbol;
  currentGameTime: number;
  winner: Winner;
  totalGames: number;
}

export interface GameBoardSizeState {
  selected: GameBoardSize;
  current: GameBoardSize;
}
