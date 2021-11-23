import React from 'react';
import { ReactComponent as AppointmentHistory } from '../../../../assets/svgImages/appintments-history.svg';
import dictionary from '../../../../dictionary/dictionary';
import { MedicalHistoryContainer, MedicalHistoryText } from './viewEmptyState.styles';

const PatientEmptyState:React.VFC = () => (
  <MedicalHistoryContainer>
    <AppointmentHistory />
    <MedicalHistoryText>
      <span>{dictionary.patientPage.emptyAppointmentsHistoryTextLine1}</span>
      <span>{dictionary.patientPage.emptyAppointmentsHistoryTextLine2}</span>
    </MedicalHistoryText>
  </MedicalHistoryContainer>
);

export default PatientEmptyState;
