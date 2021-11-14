import React from 'react';
import {TimeSlot, TimeSlotsContainer} from './TimeSlots.styles';
import {addTimeslotAC} from "../../redux/reducers/appointmentReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {TimeSlotsPropsType} from "./TimeSlots.types";
import {getDateOfAppointmentsByDoctorIdAndDate} from "../../mockData/doctors";


const TimeSlots: React.VFC<TimeSlotsPropsType> = ({timeSlots}) => {

    const selected = useSelector<AppRootStateType, string>(state => state.appointment.time);
    const selectedDate = useSelector<AppRootStateType, Date | null>(state => state.appointment.date);
    const doctorId = useSelector<AppRootStateType, string>(state => state.appointment.selectedDoctorId);
    const dispatch = useDispatch();

    const doctorsTimeslots = getDateOfAppointmentsByDoctorIdAndDate(doctorId, selectedDate)

    const handlerClick = (e: any) => {
        dispatch(addTimeslotAC(e.currentTarget.innerHTML))
    }

    return (
        <TimeSlotsContainer>
            {timeSlots.map((time, index) => {
                const isAvailableTimeSlot = doctorsTimeslots.some((timeslot)=>timeslot.indexOfTimeSlot === index)
                return <TimeSlot key={index}
                                 isSelected={selected === time}
                                 onClick={handlerClick}
                                 isAvailableTimeSlot={isAvailableTimeSlot}
                >{time}</TimeSlot>;
            })}
        </TimeSlotsContainer>
    );
};

export default TimeSlots;