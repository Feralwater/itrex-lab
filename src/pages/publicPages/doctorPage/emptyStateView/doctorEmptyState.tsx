import React from 'react';
import { ReactComponent as MedicalHistory } from '../../../../assets/svgImages/medical-history.svg';
import dictionary from '../../../../dictionary/dictionary';
import { MedicalHistoryContainer, MedicalHistoryText } from './emptyState.styles';

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
