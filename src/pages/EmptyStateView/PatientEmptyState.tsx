import { dictionary } from 'pages/dictionary/pagesDictionary';
import React from 'react';
import { ReactComponent as AppointmentHistory } from '../../assets/svg/appintments-history.svg';
import { MedicalHistoryContainer, MedicalHistoryText } from './EmptyState.styles';

export const PatientEmptyState:React.VFC = () => (
  <MedicalHistoryContainer>
    <AppointmentHistory />
    <MedicalHistoryText>
      <span>{dictionary.patientPage.emptyAppointmentsHistoryTextLine1}</span>
      <span>{dictionary.patientPage.emptyAppointmentsHistoryTextLine2}</span>
    </MedicalHistoryText>
  </MedicalHistoryContainer>
);
