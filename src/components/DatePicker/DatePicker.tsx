import React from 'react';
import Calendar, { CalendarTileProperties } from 'react-calendar';
import { useField } from 'formik';
import { isPast, addDays, format } from 'date-fns';
import { ReactComponent as NextIcon } from '../../assets/svg/rightArrowGrey-icon.svg';
import { ReactComponent as PrevIcon } from '../../assets/svg/leftArrowGrey-icon.svg';
import ReactCalendar from './DatePicker.styles';
import { DatePickerProps } from './DatePicker.types';
import { selectedDateFormatString, shortWeekdayFormatString } from './constants';

export const DatePicker:React.VFC<DatePickerProps> = ({
  doctorId, disableDate, setSelectedDate, ...props
}) => {
  const [, , { setValue }] = useField(props.field);
  const handlerClickDay = (checkedDate: Date) => {
    setValue(checkedDate);
    setSelectedDate(format(checkedDate, selectedDateFormatString));
  };
  const formatDate = (date: Date) => format(new Date(date), shortWeekdayFormatString);

  const disabledDays = ({ date }: CalendarTileProperties) => {
    if (disableDate) {
      return disableDate;
    }
    return isPast(addDays(date, 1));
  };

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
