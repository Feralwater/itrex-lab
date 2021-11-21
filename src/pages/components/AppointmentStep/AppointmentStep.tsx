import React from 'react';
import { Step, StepDescription, StepNumber } from './AppointentStep.styles';
import { AppointmentStepsPropsType } from './AppointmentStep.types';

const AppointmentStep: React.VFC<AppointmentStepsPropsType> = ({
  stepNumber,
  stepDescription,
}) => (
  <Step>
    <StepNumber>{stepNumber}</StepNumber>
    <StepDescription>{stepDescription}</StepDescription>
  </Step>
);

export default AppointmentStep;
