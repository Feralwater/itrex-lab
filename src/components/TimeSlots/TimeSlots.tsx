import React, { ChangeEvent, useEffect } from 'react';
import { useField } from 'formik';
import { parseISO, format } from 'date-fns';
import { TimeSlotsContainer } from './TimeSlots.styles';
import { TimeSlotsProps } from './TimeSlots.types';
import { TIME_SLOTS } from '../../pages/constants';
import { timeForDisplayFormat } from './constants';
import { TimeSlot } from './TimeSlot';

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

  const getTimeForServer = (time: string) => freeTimeSlots.filter((timeSlot) => timeSlot.timeForDisplay === time)?.[0]?.timeForServer;
  const isChecked = (time:string) => value === getTimeForServer(time);
  const handleClick = (e: ChangeEvent<HTMLInputElement>) => setValue(getTimeForServer(e.currentTarget.value));

  return (
    <TimeSlotsContainer>
      {TIME_SLOTS.map((time: string) => {
        const disabled = freeTimeSlots.every((timeSlot) => timeSlot.timeForDisplay !== time) || date === '';
        return (
          <TimeSlot
            key={time}
            time={time}
            isChecked={isChecked}
            handleClick={handleClick}
            disabled={disabled}
          />
        );
      })}
    </TimeSlotsContainer>
  );
};
