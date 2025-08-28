import type { PlayerState } from '@/entities/player';
import { Card, CardContent, CardHeader } from '@/shared/ui/card';
import { Timer } from '@/shared/ui/timer';
import { GameSymbolIcon } from '@/entities/game';

const PlayerCard = ({ player }: { player: PlayerState }) => {
  return (
    <Card className="flex justify-center items-center w-full sm:max-w-3xs p-2 divide-x-1 divide-grey-500">
      <CardHeader className="flex flex-col items-start p-4">
        <div className="flex items-end gap-2">
          <p className="text-lg font-bold leading-none">Player</p>
          <GameSymbolIcon symbol={player.symbol} className="w-4 h-4" />
        </div>
        <p>Score: {player.score}</p>
      </CardHeader>
      <CardContent className="p-4">
        <Timer totalSeconds={player.timeInGame} />
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
