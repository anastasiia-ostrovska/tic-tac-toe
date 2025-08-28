import { DEFAULT_WINNING_LINE_LENGTH } from '../consts/game';
import type { GameBoard, GameBoardSize, Winner } from './types';

export function calculateWinner(
  cells: GameBoard,
  boardSize: GameBoardSize,
  winLength: number = DEFAULT_WINNING_LINE_LENGTH
): Winner {
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    if (!cell) continue;

    const row = Math.floor(i / boardSize);
    const col = i % boardSize;

    // Horizontally
    if (col <= boardSize - winLength) {
      let count = 0;
      for (let k = 0; k < winLength; k++) {
        if (cells[row * boardSize + (col + k)] === cell) count++;
      }
      if (count === winLength) return cell;
    }

    // Vertically
    if (row <= boardSize - winLength) {
      let count = 0;
      for (let k = 0; k < winLength; k++) {
        if (cells[(row + k) * boardSize + col] === cell) count++;
      }
      if (count === winLength) return cell;
    }

    // Diagonal from a top-left to bottom-right
    if (row <= boardSize - winLength && col <= boardSize - winLength) {
      let count = 0;
      for (let k = 0; k < winLength; k++) {
        if (cells[(row + k) * boardSize + (col + k)] === cell) count++;
      }
      if (count === winLength) return cell;
    }

    // Diagonal from top-right to a bottom-left
    if (row <= boardSize - winLength && col >= winLength - 1) {
      let count = 0;
      for (let k = 0; k < winLength; k++) {
        if (cells[(row + k) * boardSize + (col - k)] === cell) count++;
      }
      if (count === winLength) return cell;
    }
  }

  const isBoardFull = cells.every(cell => cell !== null);
  if (isBoardFull) {
    return 'draw';
  }

  return null;
}
