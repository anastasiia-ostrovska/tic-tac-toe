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

const GameOverDialog = ({ winner }: { winner: Winner }) => {
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
        <DialogDescription className="flex gap-2 mb-3 text-lg leading-none">
          {winner !== 'draw' && gaveOverDialogMessages[winner].icon}
          {gaveOverDialogMessages[winner].message}
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
