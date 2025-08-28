import { useState } from 'react';
import { DEFAULT_BOARD_SIZE, type GameBoardSize, type GameState } from '@/entities/game';
import { getInitialGameState, initialPlayersState } from '../configs/initial-state';
import type { Players } from './types';
import { useGameTimer, usePlayersTimers } from './use-timers';
import { useCellClickHandler, useNewGameClickHandler } from './use-handlers';

export const useGame = () => {
  // States
  const [boardSize] = useState<GameBoardSize>(DEFAULT_BOARD_SIZE);
  const [gameState, setGameState] = useState<GameState>(getInitialGameState(boardSize));
  const [playersState, setPlayersState] = useState<Players>(initialPlayersState);

  // Timers
  useGameTimer({
    winner: gameState.winner,
    setState: setGameState,
  });
  usePlayersTimers({
    currentPlayer: gameState.currentPlayer,
    winner: gameState.winner,
    setState: setPlayersState,
  });

  // Handlers
  const { handleCellClick } = useCellClickHandler({
    setGameState,
    setPlayersState,
    boardSize,
    gameState,
  });

  const { handleNewGameClick } = useNewGameClickHandler({
    setGameState,
    setPlayersState,
    boardSize,
  });

  return {
    gameState,
    playersState,
    boardSize,
    handleCellClick,
    handleNewGameClick,
  };
};
