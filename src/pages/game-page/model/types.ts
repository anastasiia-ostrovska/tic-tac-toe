import type { GameSymbol } from '@/shared/model/types';
import type { PlayerState } from '@/entities/player';

export type Players = Record<GameSymbol, PlayerState>;
