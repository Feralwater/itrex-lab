import React from 'react';
import {TimeSlot, TimeSlotsContainer} from './TimeSlotsStyles';
import {addTimeslotAC} from "../../redux/reducers/appointmentReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import * as events from "events";

type TimeSlotsPropsType = {
    timeSlots: Array<string>
}

const TimeSlots: React.VFC<TimeSlotsPropsType> = ({timeSlots}) => {

    const selected = useSelector<AppRootStateType, string>(state => state.appointment.time);
    const dispatch = useDispatch();

    const handlerClick = (e: any) => {
        dispatch(addTimeslotAC(e.currentTarget.innerHTML))
    }

    return (
        <TimeSlotsContainer>
            {timeSlots.map((time) => <TimeSlot isSelected={selected === time} onClick={handlerClick}>{time}</TimeSlot>)}
        </TimeSlotsContainer>
    );
};

export default TimeSlots;