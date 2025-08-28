import { memo } from 'react';
import { Button } from '@/shared/ui/button';
import type { GameCell as Cell, GameCellClickHandler } from '@/entities/game';

interface GameCellProps {
  id: number;
  value: Cell;
  onClick: GameCellClickHandler;
}

const GameCell = ({ id, value, onClick }: GameCellProps) => {
  return (
    <Button className="p-0 h-10 w-10 rounded-none" onClick={() => onClick(id)}>
      {value}
    </Button>
  );
};

export default memo(GameCell);
