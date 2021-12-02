import React from 'react';
import { Step, StepDescription, StepNumber } from './AppointmentsSteps.styles';
import { AppointmentStepsPropsType } from './AppointmentsSteps.types';

const AppointmentsSteps: React.VFC<AppointmentStepsPropsType> = ({
  stepNumber,
  stepDescription,
}) => (
  <Step>
    <StepNumber>{stepNumber}</StepNumber>
    <StepDescription>{stepDescription}</StepDescription>
  </Step>
);

export default AppointmentsSteps;
