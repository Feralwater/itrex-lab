import React from 'react';
import { ReactComponent as MedicalHistory } from '../../assets/svg/medical-history.svg';
import { MedicalHistoryContainer, MedicalHistoryText } from './EmptyState.styles';
import { dictionary } from '../dictionary/pagesDictionary';

export const DoctorEmptyState:React.VFC = () => (
  <MedicalHistoryContainer>
    <MedicalHistory />
    <MedicalHistoryText>
      <span>{dictionary.doctorPage.emptyMedicalHistoryTextLine1}</span>
      <span>{dictionary.doctorPage.emptyMedicalHistoryTextLine2}</span>
    </MedicalHistoryText>
  </MedicalHistoryContainer>
);
