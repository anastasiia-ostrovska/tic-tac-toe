import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from '@/shared/ui/dialog';
import { GameSymbolIcon, type Winner } from '@/entities/game';
import { Button } from '@/shared/ui/button';
import { Timer } from '@/shared/ui/timer';
import type { Players } from '@/pages/game-page/model/types';

const gaveOverDialogMessages = {
  ['draw']: { title: 'Game ends in a draw 🤝', message: 'You are welcome to try again!' },
  ['x']: {
    title: 'Congratulations 🥳',
    icon: <GameSymbolIcon symbol="x" className="w-4 h-4" />,
    message: 'You are the winner!',
  },
  ['o']: {
    title: 'Congratulations 🥳',
    icon: <GameSymbolIcon symbol="o" className="w-4 h-4" />,
    message: 'You are the winner!',
  },
};

interface GameOverDialogProps {
  winner: Winner;
  gameTime: number;
  players: Players;
}

const GameOverDialog = ({ winner, gameTime, players }: GameOverDialogProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (winner) {
      timer = setTimeout(() => {
        setIsDialogOpen(true);
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [winner]);

  if (!winner) return null;

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="w-fit">
        <DialogTitle className="text-2xl">{gaveOverDialogMessages[winner].title}</DialogTitle>
        <DialogDescription className="flex flex-col gap-2 mb-3 text-lg leading-none">
          <div className="flex gap-2 items-center mb-1">
            {winner !== 'draw' && gaveOverDialogMessages[winner].icon}
            {gaveOverDialogMessages[winner].message}
          </div>
          {winner === 'draw' && (
            <div className="flex gap-2 font-bold">
              <span className="font-normal">Game Time: </span>
              <Timer totalSeconds={gameTime} />
            </div>
          )}
          {winner !== 'draw' && (
            <div className="flex gap-2 font-bold">
              <span className="font-normal">Your Time: </span>{' '}
              <Timer totalSeconds={players[winner].timeInGame} />
            </div>
          )}
        </DialogDescription>
        <DialogFooter>
          <DialogClose asChild className="cursor-pointer">
            <Button type="button">OK</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GameOverDialog;
