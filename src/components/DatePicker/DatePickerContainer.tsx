import React, { useCallback } from 'react';
import { CalendarTileProperties } from 'react-calendar';
import { useField } from 'formik';
import { isPast, addDays, format } from 'date-fns';
import { DatePickerContainerProps } from './DatePickerContainer.types';
import { selectedDateFormatString, shortWeekdayFormatString } from './constants';
import { ReactCalendar } from './ReactCalendar';

export const DatePickerContainer:React.VFC<DatePickerContainerProps> = ({
  disableDate, setSelectedDate, field,
}) => {
  const [, , { setValue }] = useField(field);
  const handlerClickDay = (checkedDate: Date) => {
    setValue(checkedDate);
    setSelectedDate(format(checkedDate, selectedDateFormatString));
  };
  const formatDate = (date: Date) => format(new Date(date), shortWeekdayFormatString);

  const disabledDays = useCallback(({ date }: CalendarTileProperties) => {
    if (disableDate) {
      return disableDate;
    }
    return isPast(addDays(date, 1));
  }, [disableDate]);

  return <ReactCalendar handlerClickDay={handlerClickDay} formatDate={formatDate} disabledDays={disabledDays} />;
};
