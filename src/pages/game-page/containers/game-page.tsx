import { Button } from '@/shared/ui/button';
import { Timer } from '@/shared/ui/timer';
import { GameBoard } from '@/features/game';
import { GameSymbolIcon } from '@/entities/game';
import { PlayerCard } from '@/features/player';
import { SelectBoardSize } from '@/features/game';
import GamePageLayout from '../ui/game-page-layout';
import { useGame } from '../model/use-game';

const GamePage = () => {
  const {
    gameState: { cells, totalGames, currentGameTime, currentPlayer },
    playersState,
    boardSize,
    handleCellClick,
    handleNewGameClick,
  } = useGame();

  return (
    <GamePageLayout
      playerCards={
        <>
          <PlayerCard player={playersState.x} />
          <PlayerCard player={playersState.o} />
        </>
      }
      nextMoveIcon={<GameSymbolIcon symbol={currentPlayer} className="w-4 h-4" />}
      gameTimer={<Timer totalSeconds={currentGameTime} />}
      gameBoard={<GameBoard cells={cells} onClick={handleCellClick} size={boardSize} />}
      newGameButton={<Button onClick={handleNewGameClick}>New Game</Button>}
      selectSize={<SelectBoardSize />}
      playedGamesCount={totalGames}
    />
  );
};

export default GamePage;
