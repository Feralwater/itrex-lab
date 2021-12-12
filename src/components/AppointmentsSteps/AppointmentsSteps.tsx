import React from 'react';
import { Step, StepDescription, StepNumber } from './AppointmentsSteps.styles';
import { AppointmentStepsProps } from './AppointmentsSteps.types';

export const AppointmentsSteps: React.VFC<AppointmentStepsProps> = ({
  stepNumber,
  stepDescription,
}) => (
  <Step>
    <StepNumber>{stepNumber}</StepNumber>
    <StepDescription>{stepDescription}</StepDescription>
  </Step>
);
