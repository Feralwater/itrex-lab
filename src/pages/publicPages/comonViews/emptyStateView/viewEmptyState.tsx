import React from 'react';
import { ReactComponent as MedicalHistory } from '../../../../assets/svgImages/medical-history.svg';
import { ReactComponent as AppointmentHistory } from '../../../../assets/svgImages/appintments-history.svg';
import dictionary from '../../../../dictionary/dictionary';
import { MedicalHistoryContainer, MedicalHistoryText } from './viewEmptyState.styles';
import { ViewEmptyStatePropsType } from './viewEmptyState.types';

const ViewEmptyState:React.VFC<ViewEmptyStatePropsType> = ({ role_name }) => (
  <MedicalHistoryContainer>
    {role_name === 'patient' ? <AppointmentHistory /> : <MedicalHistory />}
    <MedicalHistoryText>
      {role_name === 'patient'
        ? (
          <>
            <span>{dictionary.patientPage.emptyAppointmentsHistoryTextLine1}</span>
            <span>{dictionary.patientPage.emptyAppointmentsHistoryTextLine2}</span>
          </>
        )
        : (
          <>
            <span>{dictionary.doctorPage.emptyMedicalHistoryTextLine1}</span>
            <span>{dictionary.doctorPage.emptyMedicalHistoryTextLine2}</span>
          </>
        )}
    </MedicalHistoryText>
  </MedicalHistoryContainer>
);

export default ViewEmptyState;
