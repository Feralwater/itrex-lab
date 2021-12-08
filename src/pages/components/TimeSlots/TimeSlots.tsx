import React, { ChangeEvent } from 'react';
import { useField } from 'formik';
import { parseISO, format } from 'date-fns';
import { TimeSlot, TimeSlotLabel, TimeSlotsContainer } from './TimeSlots.styles';
import { TimeSlotsPropsType } from './TimeSlots.types';
import TIME_SLOTS from '../../constants/constants';

const TimeSlots: React.VFC<TimeSlotsPropsType> = ({
  freeTime,
  ...props
}) => {
  const [, , { setValue }] = useField(props.field);

  const freeTimeSlots = freeTime.map((time) => ({
    timeForDisplay: format(parseISO(time), 'h:mm aaa'),
    timeForServer: time,
  }));

  const handlerClick = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedTimeSlot = freeTimeSlots.filter((k) => k.timeForDisplay === e.currentTarget.value);
    setValue(selectedTimeSlot[0].timeForServer);
  };

  return (
    <TimeSlotsContainer>
      {TIME_SLOTS.map((time: string) => {
        const disabled = !freeTimeSlots.some((timeSlot) => timeSlot.timeForDisplay === time);
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