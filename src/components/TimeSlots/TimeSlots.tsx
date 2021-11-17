import React, { ChangeEvent } from 'react';
import { useField } from 'formik';
import { TimeSlot, TimeSlotLabel, TimeSlotsContainer } from './TimeSlots.styles';
import { getDateOfAppointmentsByDoctorIdAndDate } from '../../mockData/doctors';

const TimeSlots = ({
  doctorId, date, timeSlots, ...props
}:any) => {
  const [, , { setValue }] = useField(props.field);

  const doctorsTimeslots = getDateOfAppointmentsByDoctorIdAndDate(doctorId, date);

  const handlerClick = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <TimeSlotsContainer>
      {timeSlots.map((time:any, index:any) => {
        const disabled = !doctorsTimeslots.some((timeslot) => timeslot.indexOfTimeSlot === index);
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
