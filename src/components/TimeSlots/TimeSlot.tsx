import React from 'react';
import { TimeSlotContainer, TimeSlotLabel } from './TimeSlots.styles';

interface TimeSlotProps {
  time: string;
  isChecked: (time: string) => boolean;
  handleClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}

export const TimeSlot: React.VFC<TimeSlotProps> = ({
  time,
  isChecked,
  handleClick,
  disabled,
}) => (
  <div>
    <TimeSlotContainer
      id={time}
      type="radio"
      name="radio"
      value={time}
      checked={isChecked(time)}
      onChange={handleClick}
      disabled={disabled}
    />
    <TimeSlotLabel htmlFor={time}>{time}</TimeSlotLabel>
  </div>
);
