import React from 'react';
import Calendar from "react-calendar";
import './DatePicker.css'
import {useDispatch} from "react-redux";
import {addDateAC} from "../../redux/reducers/appointmentReducer";
import {ReactComponent as NextIcon} from '../../svgImages/rightArrowGrey-icon.svg';
import {ReactComponent as PrevIcon} from '../../svgImages/leftArrowGrey-icon.svg';

const DatePicker: React.VFC = () => {

    const dispatch = useDispatch();
    const handlerClickDay = (checkedDate: Date) => {
        dispatch(addDateAC(checkedDate.toDateString()));
    }

    const formatDate = (date: Date) => {
        return date.toDateString()[0]
    }
    return (<>
            <Calendar locale={"Us"}
                      prev2Label={null}
                      next2Label={null}
                      minDetail={"month"}
                      nextAriaLabel={"Next"}
                      prevAriaLabel={"Previous"}
                      nextLabel={<NextIcon/>}
                      prevLabel={<PrevIcon/>}
                      onClickDay={handlerClickDay}
                      returnValue={"end"}
                      formatShortWeekday={(locale, date) => formatDate(date)}
                      minDate={new Date()}
            />
        </>
    );
};

export default DatePicker;