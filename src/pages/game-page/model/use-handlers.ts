import { type Dispatch, type SetStateAction, useCallback } from 'react';
import {
  calculateWinner,
  type GameBoardSize,
  type GameBoardSizeState,
  type GameState,
  generateInitialCells,
} from '@/entities/game';
import type { Players } from './types';

interface UseCellClickHandlerParams {
  boardSize: GameBoardSize;
  gameState: GameState;
  setGameState: Dispatch<SetStateAction<GameState>>;
  setPlayersState: Dispatch<SetStateAction<Players>>;
}

export const useCellClickHandler = ({
  boardSize,
  gameState,
  setGameState,
  setPlayersState,
}: UseCellClickHandlerParams) => {
  const handleCellClick = useCallback(
    (id: number) => {
      // Return If the cell is already filled or the game is over
      if (gameState.cells[id] || calculateWinner(gameState.cells, boardSize)) return;

      // Get a new game state
      const nextPlayer = gameState.currentPlayer === 'x' ? 'o' : 'x';
      const newCells = [...gameState.cells];
      newCells[id] = gameState.currentPlayer;
      const newGameState: GameState = { ...gameState, cells: newCells, currentPlayer: nextPlayer };

      setGameState(newGameState);

      // Check if the game is over with a winner or draw
      const newWinnerState = calculateWinner(newGameState.cells, boardSize);
      if (newWinnerState) {
        setGameState(prevState => ({
          ...prevState,
          winner: newWinnerState,
          totalGames: prevState.totalGames + 1,
        }));

        // Change the player's score if the game is over with a winner
        if (newWinnerState !== 'draw') {
          setPlayersState(prevState => ({
            ...prevState,
            [newWinnerState]: {
              ...prevState[newWinnerState],
              score: prevState[newWinnerState].score + 1,
            },
          }));
        }

        return;
      }
    },
    [boardSize, gameState, setGameState, setPlayersState]
  );

  return { handleCellClick };
};

interface UseNewGameClickHandlerParams {
  selectedBoardSize: GameBoardSize;
  setBoardSize: Dispatch<SetStateAction<GameBoardSizeState>>;
  setGameState: Dispatch<SetStateAction<GameState>>;
  setPlayersState: Dispatch<SetStateAction<Players>>;
}

export const useNewGameClickHandler = ({
  selectedBoardSize,
  setBoardSize,
  setGameState,
  setPlayersState,
}: UseNewGameClickHandlerParams) => {
  const handleNewGameClick = () => {
    setBoardSize(prevState => ({
      ...prevState,
      current: selectedBoardSize,
    }));

    setGameState(prevState => ({
      ...prevState,
      cells: generateInitialCells(selectedBoardSize),
      currentPlayer: 'x',
      currentGameTime: 0,
      winner: null,
    }));

    setPlayersState(prevState => ({
      ...prevState,
      ['o']: { ...prevState.o, timeInGame: 0 },
      ['x']: { ...prevState.x, timeInGame: 0 },
    }));
  };

  return { handleNewGameClick };
};
