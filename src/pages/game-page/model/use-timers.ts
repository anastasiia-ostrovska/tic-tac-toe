import { type Dispatch, type SetStateAction, useEffect } from 'react';
import type { GameSymbol } from '@/shared/model/types';
import type { GameState, Winner } from '@/entities/game';
import type { Players } from './types';

interface UsePlayersTimersParams {
  currentPlayer: GameSymbol;
  winner: Winner;
  setState: Dispatch<SetStateAction<Players>>;
}

export const usePlayersTimers = ({ currentPlayer, winner, setState }: UsePlayersTimersParams) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setState(prevState => ({
        ...prevState,
        [currentPlayer]: {
          ...prevState[currentPlayer],
          timeInGame: prevState[currentPlayer].timeInGame + 1,
        },
      }));
    }, 1000);

    if (winner) clearInterval(interval);

    return () => clearInterval(interval);
  }, [currentPlayer, setState, winner]);
};

interface UseGameTimerParams {
  winner: Winner;
  setState: Dispatch<SetStateAction<GameState>>;
}

export const useGameTimer = ({ winner, setState }: UseGameTimerParams) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setState(prevState => ({ ...prevState, currentGameTime: prevState.currentGameTime + 1 }));
    }, 1000);

    if (winner) clearInterval(interval);

    return () => clearInterval(interval);
  }, [setState, winner]);
};
