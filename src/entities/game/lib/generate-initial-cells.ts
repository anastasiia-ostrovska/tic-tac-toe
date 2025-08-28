import type { GameBoardSize } from '../model/types';

export const generateInitialCells = (size: GameBoardSize): null[] => {
  return Array.from({ length: size * size }, () => null);
};
