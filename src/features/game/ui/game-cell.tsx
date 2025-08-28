import { memo } from 'react';
import { Button } from '@/shared/ui/button';
import { type GameCell as Cell, type GameCellClickHandler, GameSymbolIcon } from '@/entities/game';

interface GameCellProps {
  id: number;
  value: Cell;
  onClick: GameCellClickHandler;
}

const GameCell = ({ id, value, onClick }: GameCellProps) => {
  return (
    <Button variant="outline" className="p-0 h-10 w-10 rounded-none" onClick={() => onClick(id)}>
      {value ? <GameSymbolIcon symbol={value} className="w-5 h-5" /> : value}
    </Button>
  );
};

export default memo(GameCell);
