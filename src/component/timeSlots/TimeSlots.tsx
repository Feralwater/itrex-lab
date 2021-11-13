import React from 'react';
import {TimeSlot, TimeSlotsContainer} from './TimeSlots.styles';
import {addTimeslotAC} from "../../redux/reducers/appointmentReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {TimeSlotsPropsType} from "./TimeSlots.types";

const TimeSlots: React.VFC<TimeSlotsPropsType> = ({timeSlots}) => {

    const selected = useSelector<AppRootStateType, string>(state => state.appointment.time);
    const dispatch = useDispatch();

    const handlerClick = (e: any) => {
        dispatch(addTimeslotAC(e.currentTarget.innerHTML))
    }

    return (
        <TimeSlotsContainer>
            {timeSlots.map((time, index) => <TimeSlot key={index}
                                                      isSelected={selected === time}
                                                      onClick={handlerClick}
            >{time}</TimeSlot>)}
        </TimeSlotsContainer>
    );
};

export default TimeSlots;