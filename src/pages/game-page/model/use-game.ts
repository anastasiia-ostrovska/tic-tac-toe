import { useState } from 'react';
import type { GameBoardSizeState, GameState } from '@/entities/game';
import {
  getInitialGameState,
  initialBoardSizeState,
  initialPlayersState,
} from '../configs/initial-state';
import type { Players } from './types';
import { useGameTimer, usePlayersTimers } from './use-timers';
import { useCellClickHandler, useNewGameClickHandler } from './use-handlers';

export const useGame = () => {
  // States
  const [boardSize, setBoardSize] = useState<GameBoardSizeState>(initialBoardSizeState);
  const [gameState, setGameState] = useState<GameState>(getInitialGameState(boardSize.current));
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
    boardSize: boardSize.current,
    gameState,
  });

  const { handleNewGameClick } = useNewGameClickHandler({
    setGameState,
    setPlayersState,
    selectedBoardSize: boardSize.selected,
    setBoardSize,
  });

  return {
    gameState,
    playersState,
    boardSize,
    setBoardSize,
    handleCellClick,
    handleNewGameClick,
  };
};
