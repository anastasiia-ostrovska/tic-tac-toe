import type { PlayerState } from '@/entities/player';
import { Card, CardContent, CardHeader } from '@/shared/ui/card';
import { Timer } from '@/shared/ui/timer';
import { GameSymbolIcon } from '@/entities/game';

const PlayerCard = ({ player }: { player: PlayerState }) => {
  return (
    <Card className="w-full sm:max-w-3xs">
      <CardHeader className="flex flex-row justify-center font-bold text-xl">
        <div className="flex items-end gap-2">
          <p className="text-xl font-bold leading-none">Player</p>
          <GameSymbolIcon symbol={player.symbol} className="w-4 h-4" />
        </div>
      </CardHeader>
      <CardContent>
        <p>Score: {player.score}</p>
        <Timer totalSeconds={player.timeInGame} />
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
