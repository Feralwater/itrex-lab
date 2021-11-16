import React from 'react';
import Calendar from 'react-calendar';
import { useDispatch, useSelector } from 'react-redux';
import { isSameDay } from 'date-fns';
import { addDateAC } from '../../redux/reducers/appointmentReducer';
import { ReactComponent as NextIcon } from '../../assets/svgImages/rightArrowGrey-icon.svg';
import { ReactComponent as PrevIcon } from '../../assets/svgImages/leftArrowGrey-icon.svg';
import { getDateOfAppointmentsByDoctorId } from '../../mockData/doctors';
import { AppRootStateType } from '../../redux/store';
import ReactCalendar from './DataPicker.styles';

const DatePicker: React.VFC = () => {
  const dispatch = useDispatch();
  const handlerClickDay = (checkedDate: Date) => {
    dispatch(addDateAC(checkedDate));
  };

  const formatDate = (date: Date) => date.toDateString()[0];
  const doctorId = useSelector<AppRootStateType, string>((state) => state.appointment.selectedDoctorId);
  const dateOfAppointments = getDateOfAppointmentsByDoctorId(doctorId);

  const disabledDays = ({ date }: any) => !dateOfAppointments.some((slot) => isSameDay(slot.dayOfMonth, date));

  return (
    <ReactCalendar>
      <Calendar
        locale="Us"
        prev2Label={null}
        next2Label={null}
        minDetail="month"
        nextAriaLabel="Next"
        prevAriaLabel="Previous"
        nextLabel={<NextIcon />}
        prevLabel={<PrevIcon />}
        onClickDay={handlerClickDay}
        returnValue="end"
        formatShortWeekday={(locale, date) => formatDate(date)}
        tileDisabled={disabledDays}
      />
    </ReactCalendar>
  );
};

export default DatePicker;
