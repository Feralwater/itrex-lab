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
import colors from '../../../styles/colors';

const PatientNavigatePanel: React.VFC = () => (
  <>
    <PatientsButtonsContainer>
      <PatientsButton to="" color={colors.white}>{dictionary.patientPage.buttonProfile}</PatientsButton>
      <PatientsButton to={PATH.MY_APPOINTMENTS} color={colors.cornflower_blue}>{dictionary.patientPage.buttonAppointments}</PatientsButton>
      <PatientsButton to="" color={colors.white}>{dictionary.patientPage.buttonResolutions}</PatientsButton>
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
