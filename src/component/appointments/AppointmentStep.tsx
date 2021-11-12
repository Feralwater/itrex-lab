import React from 'react';
import {Step, StepDescription, StepNumber} from "./AppointentStepStyles";

type AppointmentStepsPropsType = {
    stepNumber: number
    stepDescription: string
}

const AppointmentStep: React.VFC<AppointmentStepsPropsType> = ({
                                                                   stepNumber,
                                                                   stepDescription
                                                               }) => {
    return (
        <Step>
            <StepNumber>{stepNumber}</StepNumber>
            <StepDescription>{stepDescription}</StepDescription>
        </Step>
    );
};

export default AppointmentStep;