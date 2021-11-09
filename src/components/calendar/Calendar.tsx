import React, {useEffect, useState} from 'react';
import {
    CalendarArrow,
    CalendarBody,
    CalendarContainer, CalendarHeader,
    DatePickerContainer, DayNumber,
    Week,
    Weekday,
    WeekdaysContainer
} from './CalendarStyles';
import Button from "../button/Button";
import * as calendar from './calendar';
import {ReactComponent as RightCalendarArrow} from '../../svgImages/rightArrowGrey-icon.svg';
import {ReactComponent as LeftCalendarArrow} from '../../svgImages/leftArrowGrey-icon.svg';

type CalendarPropsType = {
    date: Date
    years: Array<number>
    monthNames: Array<string>
    weekDayNames: Array<string>
    onChange: Function
}

const Calendar: React.VFC<CalendarPropsType> = (props) => {

    const [date, setDate] = useState<Date>(props.date);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [year, setYear] = useState<number>(props.date.getFullYear());
    const [month, setMonth] = useState<number>(props.date.getMonth());

    useEffect(() => {
        setMonth(date.getMonth())
        setYear(date.getFullYear())
    }, [date]);

    const handlePrevMonthButtonClick = () => {
        const date = new Date(year, month - 1);
        setDate(date);
    };

    const handleNextMonthButtonClick = () => {
        const date = new Date(year, month + 1);
        setDate(date);
    };

    const handleDayClick = (date: any) => {
        setSelectedDate(date);
    };

    const monthData = calendar.getMonthData(year, month);

    return (
        <CalendarContainer>
            <DatePickerContainer>
                <Button type={"button"}
                        onClick={handlePrevMonthButtonClick}
                        styledComponent={CalendarArrow}
                >{<LeftCalendarArrow/>}</Button>
                <CalendarHeader>{date.toLocaleString('default', {month: 'long'})} {year}</CalendarHeader>
                <Button type={"button"}
                        styledComponent={CalendarArrow}
                        onClick={handleNextMonthButtonClick}
                >{<RightCalendarArrow/>}</Button>
            </DatePickerContainer>
            <WeekdaysContainer>
                {props.weekDayNames.map(weekDay =>
                    <Weekday key={weekDay}>{weekDay}</Weekday>
                )}
            </WeekdaysContainer>
            <CalendarBody>
                {monthData.map((week, index) =>
                    <Week key={index}>
                        {week.map((date: Date, index) =>


                             <DayNumber key={index}
                                             today={calendar.areEqual(date, currentDate)}
                                             selected={calendar.areEqual(date, selectedDate)}
                                             onClick={() => handleDayClick(date)}
                                >
                                    {date.getDate()}
                                </DayNumber>
                        )}
                    </Week>
                )}
            </CalendarBody>
        </CalendarContainer>
    );
};

export default Calendar;