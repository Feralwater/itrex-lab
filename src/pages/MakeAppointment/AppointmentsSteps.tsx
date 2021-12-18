import React from 'react';
import { Step, StepDescription, StepNumber } from './MakeAppointment.styles';

export interface AppointmentStepsProps {
  stepNumber: number;
  stepDescription: string;
}

export const AppointmentsSteps: React.VFC<AppointmentStepsProps> = ({
  stepNumber,
  stepDescription,
}) => (
  <Step>
    <StepNumber>{stepNumber}</StepNumber>
    <StepDescription>{stepDescription}</StepDescription>
  </Step>
);
