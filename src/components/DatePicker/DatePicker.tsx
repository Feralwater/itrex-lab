import React from 'react';
import Calendar from "react-calendar";
import './DatePicker.css'
import {useDispatch, useSelector} from "react-redux";
import {addDateAC} from "../../redux/reducers/appointmentReducer";
import {ReactComponent as NextIcon} from '../../assets/svgImages/rightArrowGrey-icon.svg';
import {ReactComponent as PrevIcon} from '../../assets/svgImages/leftArrowGrey-icon.svg';
import { getDateOfAppointmentsByDoctorId} from "../../mockData/doctors";
import {AppRootStateType} from "../../redux/store";
import {isSameDay} from "date-fns";

const DatePicker: React.VFC = () => {

    const dispatch = useDispatch();
    const handlerClickDay = (checkedDate: Date) => {
        dispatch(addDateAC(checkedDate));
    }

    const formatDate = (date: Date) => {
        return date.toDateString()[0]
    }
    const doctorId = useSelector<AppRootStateType, string>(state => state.appointment.selectedDoctorId);
    const dateOfAppointments = getDateOfAppointmentsByDoctorId(doctorId)

    const disabledDays = ({activeStartDate, date, view}: any) => {
        return  !dateOfAppointments.some((slot)=> {
           return  isSameDay(slot.dayOfMonth, date)
        })
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
                      tileDisabled={disabledDays}
            />
        </>
    );
};

export default DatePicker;