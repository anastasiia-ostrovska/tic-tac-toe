import type { Dispatch, SetStateAction } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import type { GameBoardSize } from '@/entities/game';
import type { GameBoardSizeState } from '@/entities/game';

interface SelectBoardSizeProps {
  size: number;
  setSize: Dispatch<SetStateAction<GameBoardSizeState>>;
}

const selectBoardSizeItems = [
  { value: '3', label: '3x3' },
  { value: '4', label: '4x4' },
  { value: '5', label: '5x5' },
  { value: '6', label: '6x6' },
  { value: '7', label: '7x7' },
  { value: '8', label: '8x8' },
  { value: '9', label: '9x9' },
];

const SelectBoardSize = ({ size, setSize }: SelectBoardSizeProps) => {
  return (
    <Select
      value={String(size)}
      onValueChange={value =>
        setSize(prevState => ({ ...prevState, selected: Number(value) as GameBoardSize }))
      }
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={selectBoardSizeItems[0].label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Board Size</SelectLabel>
          {selectBoardSizeItems.map(({ value, label }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectBoardSize;
