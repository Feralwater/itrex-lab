import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TimeSlot, TimeSlotLabel, TimeSlotsContainer } from './TimeSlots.styles';
import { addTimeslotAC } from '../../redux/reducers/appointmentReducer';
import { AppRootStateType } from '../../redux/store';
import { TimeSlotsPropsType } from './TimeSlots.types';
import { getDateOfAppointmentsByDoctorIdAndDate } from '../../mockData/doctors';

const TimeSlots: React.VFC<TimeSlotsPropsType> = ({ timeSlots }) => {
  const selected = useSelector<AppRootStateType, string>((state) => state.appointment.time);
  const selectedDate = useSelector<AppRootStateType, Date | null>((state) => state.appointment.date);
  const doctorId = useSelector<AppRootStateType, string>((state) => state.appointment.selectedDoctorId);
  const dispatch = useDispatch();

  const doctorsTimeslots = getDateOfAppointmentsByDoctorIdAndDate(doctorId, selectedDate);

  const handlerClick = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(addTimeslotAC(e.currentTarget.value));
  };

  return (
    <TimeSlotsContainer>
      {timeSlots.map((time, index) => {
        const disabled = !doctorsTimeslots.some((timeslot) => timeslot.indexOfTimeSlot === index);
        return (
          <div key={time}>
            <TimeSlot
              id={time}
              type="radio"
              name="radio"
              value={time}
              checked={selected === time}
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
