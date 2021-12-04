import React from 'react';
import { ReactComponent as MedicalHistory } from '../../assets/svgImages/medical-history.svg';
import { MedicalHistoryContainer, MedicalHistoryText } from './EmptyState.styles';
import dictionary from '../../dictionary/dictionary';

const DoctorEmptyState:React.VFC = () => (
  <MedicalHistoryContainer>
    <MedicalHistory />
    <MedicalHistoryText>
      <span>{dictionary.doctorPage.emptyMedicalHistoryTextLine1}</span>
      <span>{dictionary.doctorPage.emptyMedicalHistoryTextLine2}</span>
    </MedicalHistoryText>
  </MedicalHistoryContainer>
);

export default DoctorEmptyState;
