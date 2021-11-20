import React from 'react';
import Calendar, { CalendarTileProperties } from 'react-calendar';
import { useField } from 'formik';
import { isPast, addDays, format } from 'date-fns';
import { ReactComponent as NextIcon } from '../../assets/svgImages/rightArrowGrey-icon.svg';
import { ReactComponent as PrevIcon } from '../../assets/svgImages/leftArrowGrey-icon.svg';
import ReactCalendar from './DataPicker.styles';
import { DatePickerPropsType } from './DataPicker.types';

const DatePicker:React.VFC<DatePickerPropsType> = ({
  doctorId, disableDate, setSelectedDate, ...props
}) => {
  const [, , { setValue }] = useField(props.field);
  const handlerClickDay = (checkedDate: Date) => {
    setValue(checkedDate);
    setSelectedDate(format(checkedDate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"));
  };
  const formatDate = (date: Date) => date.toDateString()[0];

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

export default DatePicker;
