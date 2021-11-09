import React from 'react';
import {TimeSlot, TimeSlotsContainer} from './TimeSlotsStyles';

type TimeSlotsPropsType = {
    timeSlots: Array<string>
}

const TimeSlots: React.VFC<TimeSlotsPropsType> = ({timeSlots}) => {
    return (
        <TimeSlotsContainer>
            {timeSlots.map((time) => <TimeSlot>{time}</TimeSlot>)}
        </TimeSlotsContainer>
    );
};

export default TimeSlots;