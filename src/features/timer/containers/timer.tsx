import { formatTime } from '../lib/format-time';

const Timer = ({ totalSeconds }: { totalSeconds: number }) => {
  return <div>{formatTime(totalSeconds)}</div>;
};

export default Timer;
