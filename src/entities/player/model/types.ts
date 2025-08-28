import type { GameSymbol } from '@/shared/model/types';

export interface PlayerState {
  symbol: GameSymbol;
  score: number;
  timeInGame: number;
}
