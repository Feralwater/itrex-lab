import React from 'react';
import { Step, StepDescription, StepNumber } from './appointmentsSteps.styles';
import { AppointmentStepsPropsType } from './appointmentsSteps.types';

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
