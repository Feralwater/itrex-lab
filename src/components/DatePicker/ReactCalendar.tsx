import Calendar, { CalendarTileProperties } from 'react-calendar';
import React from 'react';
import ReactCalendarContainer from './DatePickerContainer.styles';
import { ReactComponent as NextIcon } from '../../assets/svg/rightArrowGrey-icon.svg';
import { ReactComponent as PrevIcon } from '../../assets/svg/leftArrowGrey-icon.svg';

interface ReactCalendarProps {
  handlerClickDay: (checkedDate: Date) => void,
  formatDate: (date: Date) => string,
  disabledDays: ({ date }: CalendarTileProperties) => (boolean)
}

export const ReactCalendar: React.VFC<ReactCalendarProps> = ({
  handlerClickDay,
  formatDate,
  disabledDays,
}) => (
  <ReactCalendarContainer>
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
  </ReactCalendarContainer>
);
