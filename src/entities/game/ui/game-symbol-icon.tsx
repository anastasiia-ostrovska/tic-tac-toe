import type { GameSymbol } from '@/shared/model/types';
import xIcon from '@/assets/icons/symbol-x.png';
import oIcon from '@/assets/icons/symbol-o.png';

const symbolIcons = {
  ['x']: xIcon,
  ['o']: oIcon,
};

interface GameSymbolProps {
  symbol: GameSymbol;
  className?: string;
}

const GameSymbolIcon = ({ symbol, className }: GameSymbolProps) => {
  return <img className={className} src={symbolIcons[symbol]} alt={`Game symbol: ${symbol}`} />;
};

export default GameSymbolIcon;
