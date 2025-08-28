import type { ReactElement } from 'react';
import { Card } from '@/shared/ui/card';

interface GamePageLayoutProps {
  playerCards: ReactElement;
  nextMoveIcon: ReactElement;
  gameTimer: ReactElement;
  gameBoard: ReactElement;
  newGameButton: ReactElement;
  selectSize: ReactElement;
  playedGamesCount: number;
}

const GamePageLayout = ({
  playerCards,
  nextMoveIcon,
  gameTimer,
  gameBoard,
  newGameButton,
  selectSize,
  playedGamesCount,
}: GamePageLayoutProps) => {
  return (
    <div className="flex flex-col gap-6 max-w-xl mx-auto">
      <header>
        <h1 className="text-4xl font-bold text-start mb-2">Tic Tac Toe</h1>
        <p className="text-xl font-bold text-start">Games played: {playedGamesCount}</p>
      </header>
      <main className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4">{playerCards}</div>
        <Card className="flex flex-col items-center justify-center gap-8 p-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 w-full">
            <div className="flex flex-col self-start items-start gap-2">
              <div className="flex items-end gap-2">
                <p className="text-xl font-bold leading-none">Current move</p>
                {nextMoveIcon}
              </div>
              <div className="flex gap-2">Total: {gameTimer}</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              {newGameButton}
              {selectSize}
            </div>
          </div>
          {gameBoard}
        </Card>
      </main>
    </div>
  );
};

export default GamePageLayout;
