import { type GameBoardSize, type GameState, generateInitialCells } from '@/entities/game';
import type { Players } from '../model/types';

export const initialPlayersState: Players = {
  ['x']: {
    symbol: 'x',
    score: 0,
    timeInGame: 0,
  },
  ['o']: {
    symbol: 'o',
    score: 0,
    timeInGame: 0,
  },
};

export const getInitialGameState = (boardSize: GameBoardSize): GameState => ({
  cells: generateInitialCells(boardSize),
  currentPlayer: 'x',
  currentGameTime: 0,
  winner: null,
  totalGames: 0,
});
