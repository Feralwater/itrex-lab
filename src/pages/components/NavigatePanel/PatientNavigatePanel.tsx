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
import { NavigatePanelProps } from '../../AppointmentsContainer/AppointmentsContainer.types';

const PatientNavigatePanel:React.VFC<NavigatePanelProps> = ({ pageTitle }) => (
  <>
    <PatientsButtonsContainer>
      <PatientsButton to={PATH.PROFILE} $active={isActiveTab(dictionary.patientPage.buttonProfile)}>{dictionary.patientPage.buttonProfile}</PatientsButton>
      <PatientsButton
        to={PATH.APPOINTMENTS}
        $active={isActiveTab(dictionary.patientPage.buttonAppointments)}
      >
        {dictionary.patientPage.buttonAppointments}
      </PatientsButton>
      <PatientsButton to={PATH.MY_RESOLUTIONS} $active={isActiveTab(dictionary.patientPage.buttonResolutions)}>{dictionary.patientPage.buttonResolutions}</PatientsButton>
    </PatientsButtonsContainer>
    <PatientsHeader>
      <PatientsTitle>{ pageTitle }</PatientsTitle>
      <ButtonWrapper>
        <ButtonLeftPlusIcon />
        <CreateAppointmentButton to={PATH.CREATE_APPOINTMENT}>
          {dictionary.patientPage.createAppointments}
        </CreateAppointmentButton>
      </ButtonWrapper>
    </PatientsHeader>
  </>
);

export default PatientNavigatePanel;
