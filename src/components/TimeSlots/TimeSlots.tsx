import React, { ChangeEvent } from 'react';
import { useField } from 'formik';
import { parseISO, format } from 'date-fns';
import { TimeSlot, TimeSlotLabel, TimeSlotsContainer } from './TimeSlots.styles';
import { TimeSlotsPropsType } from './TimeSlots.types';
import TIME_SLOTS from '../../forms/const/const';

const TimeSlots: React.VFC<TimeSlotsPropsType> = ({
  freeTime,
  ...props
}) => {
  const [, , { setValue }] = useField(props.field);

  const handlerClick = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const freeTimeSlots = freeTime.map((time) => format(parseISO(time), 'h:mm aaa'));

  return (
    <TimeSlotsContainer>
      {TIME_SLOTS.map((time: string) => {
        const disabled = !freeTimeSlots.some((timeSlot) => timeSlot === time);
        console.log(time);
        return (
          <div key={time}>
            <TimeSlot
              id={time}
              type="radio"
              name="radio"
              value={time}
              onChange={handlerClick}
              disabled={disabled}
            />
            <TimeSlotLabel htmlFor={time}>{time}</TimeSlotLabel>
          </div>
        );
      })}
    </TimeSlotsContainer>
  );
};

export default TimeSlots;
