import React from 'react';
import { ButtonWrapper } from 'forms/authForms/authForm.styles';
import {
  ButtonLeftPlusIcon,
  CreateAppointmentButton,
  PatientsButton,
  PatientsButtonsContainer,
  PatientsHeader,
  PatientsTitle,
} from './NavigatePanel.styles';
import dictionary from '../../../dictionary/dictionary';
import { PATH } from '../../../routes/constants';
import isActiveTab from './helpers';

const PatientNavigatePanel: React.VFC = () => (
  <>
    <PatientsButtonsContainer>
      <PatientsButton to={PATH.PROFILE} isActive={isActiveTab(dictionary.patientPage.buttonProfile)}>{dictionary.patientPage.buttonProfile}</PatientsButton>
      <PatientsButton
        to={PATH.APPOINTMENTS}
        isActive={isActiveTab(dictionary.patientPage.buttonAppointments)}
      >
        {dictionary.patientPage.buttonAppointments}
      </PatientsButton>
      <PatientsButton to={PATH.MY_RESOLUTIONS} isActive={isActiveTab(dictionary.patientPage.buttonResolutions)}>{dictionary.patientPage.buttonResolutions}</PatientsButton>
    </PatientsButtonsContainer>
    <PatientsHeader>
      <PatientsTitle>{dictionary.patientPage.title}</PatientsTitle>
      <ButtonWrapper>
        <ButtonLeftPlusIcon />
        <CreateAppointmentButton to="/create-an-appointment">
          {dictionary.patientPage.createAppointments}
        </CreateAppointmentButton>
      </ButtonWrapper>
    </PatientsHeader>
  </>
);

export default PatientNavigatePanel;
