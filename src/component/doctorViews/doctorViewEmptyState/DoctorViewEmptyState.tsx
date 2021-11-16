import React from 'react';
import { ReactComponent as MedicalHistory } from '../../../assets/svgImages/medical-history.svg';
import { MedicalHistoryContainer, MedicalHistoryText } from './DoctorViewEmptyState.styles';

const DoctorViewEmptyState = () => (
  <MedicalHistoryContainer>
    <MedicalHistory />
    <MedicalHistoryText>
      <span>You have no patients yet.</span>
      <span>To create a patient profile, please contact your administrator.</span>
    </MedicalHistoryText>
  </MedicalHistoryContainer>
);

export default DoctorViewEmptyState;
