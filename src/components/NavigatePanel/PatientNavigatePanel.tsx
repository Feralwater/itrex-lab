import React from 'react';
import { ButtonWrapper } from 'components/AuthForms/AuthForm.styles';
import {
  ButtonLeftPlusIcon,
  CreateAppointmentButton,
  PatientsButton,
  PatientsButtonsContainer,
  UserPageTitle,
  PatientsTitle,
} from './NavigatePanel.styles';
import dictionary from '../../pages/dictionary/pagesDictionary';
import { PATH } from '../../routes/constants';
import isActiveTab from './utils';
import { NavigatePanelProps } from '../../pages/AppointmentsContainer/AppointmentsContainer.types';

export const PatientNavigatePanel:React.VFC<NavigatePanelProps> = ({ pageTitle }) => (
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
    <UserPageTitle>
      <PatientsTitle>{ pageTitle }</PatientsTitle>
      <ButtonWrapper>
        <ButtonLeftPlusIcon />
        <CreateAppointmentButton to={PATH.CREATE_APPOINTMENT}>
          {dictionary.patientPage.createAppointments}
        </CreateAppointmentButton>
      </ButtonWrapper>
    </UserPageTitle>
  </>
);
