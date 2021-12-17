import React, { ChangeEvent, useEffect } from 'react';
import { useField } from 'formik';
import { parseISO, format } from 'date-fns';
import { TimeSlot, TimeSlotLabel, TimeSlotsContainer } from './TimeSlots.styles';
import { TimeSlotsProps } from './TimeSlots.types';
import { TIME_SLOTS } from '../../pages/constants';
import { timeForDisplayFormat } from './constants';

export const TimeSlots: React.VFC<TimeSlotsProps> = ({
  freeTime,
  date,
  value,
  occupation,
  doctorName,
  field,
}) => {
  const [, , { setValue }] = useField(field);

  const freeTimeSlots = freeTime.map((time) => ({
    timeForDisplay: format(parseISO(time), timeForDisplayFormat),
    timeForServer: time,
  }));

  useEffect(() => {
    setValue(null);
  }, [date, occupation, doctorName]);

  function getTimeForServer(time: string) {
    return freeTimeSlots.filter((timeSlot) => timeSlot.timeForDisplay === time)?.[0]?.timeForServer;
  }
  const isChecked = (time:string) => value === getTimeForServer(time);

  const handlerClick = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(getTimeForServer(e.currentTarget.value));
  };
  return (
    <TimeSlotsContainer>
      {TIME_SLOTS.map((time: string) => {
        const disabled = freeTimeSlots.every((timeSlot) => timeSlot.timeForDisplay !== time) || date === '';
        return (
          <div key={time}>
            <TimeSlot
              id={time}
              type="radio"
              name="radio"
              value={time}
              checked={isChecked(time)}
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
