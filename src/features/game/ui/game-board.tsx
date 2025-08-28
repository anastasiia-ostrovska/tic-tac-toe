import {
  DEFAULT_BOARD_SIZE,
  type GameBoard as Cells,
  type GameBoardSize,
  type GameCellClickHandler,
} from '@/entities/game';
import GameCell from './game-cell';

interface GameBoardProps {
  cells: Cells;
  onClick: GameCellClickHandler;
  size?: GameBoardSize;
}

const GameBoard = ({ cells, onClick, size = DEFAULT_BOARD_SIZE }: GameBoardProps) => {
  return (
    <div
      className={`grid gap-1`}
      style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 40px))` }}
    >
      {cells.map((cell, index) => (
        <GameCell key={index} id={index} value={cell} onClick={onClick} />
      ))}
    </div>
  );
};

export default GameBoard;
