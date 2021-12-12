import dictionary from 'pages/dictionary/pagesDictionary';
import React from 'react';
import { MedicalHistoryContainer, MedicalHistoryText } from './EmptyState.styles';
import { ReactComponent as AppointmentHistory } from '../../assets/svg/appintments-history.svg';

export const PatientEmptyState:React.VFC = () => (
  <MedicalHistoryContainer>
    <AppointmentHistory />
    <MedicalHistoryText>
      <span>{dictionary.patientPage.emptyAppointmentsHistoryTextLine1}</span>
      <span>{dictionary.patientPage.emptyAppointmentsHistoryTextLine2}</span>
    </MedicalHistoryText>
  </MedicalHistoryContainer>
);
