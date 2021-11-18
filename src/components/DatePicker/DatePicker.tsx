import React from 'react';
import Calendar, { CalendarTileProperties } from 'react-calendar';
import { isSameDay } from 'date-fns';
import { useField } from 'formik';
import { ReactComponent as NextIcon } from '../../assets/svgImages/rightArrowGrey-icon.svg';
import { ReactComponent as PrevIcon } from '../../assets/svgImages/leftArrowGrey-icon.svg';
import { getDateOfAppointmentsByDoctorId } from '../../mockData/doctors';
import ReactCalendar from './DataPicker.styles';
import { DatePickerPropsType } from './DataPicker.types';

const DatePicker:React.VFC<DatePickerPropsType> = ({ doctorId, ...props }) => {
  const [, , { setValue }] = useField(props.field);
  const handlerClickDay = (checkedDate: Date) => {
    setValue(checkedDate);
  };
  const formatDate = (date: Date) => date.toDateString()[0];
  const dateOfAppointments = getDateOfAppointmentsByDoctorId(doctorId);

  const disabledDays = ({ date }: CalendarTileProperties) => !dateOfAppointments.some((slot):boolean => isSameDay(slot.dayOfMonth, date));

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
