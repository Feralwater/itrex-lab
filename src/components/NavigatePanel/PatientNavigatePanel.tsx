import React, { Dispatch, SetStateAction } from 'react';
import { ButtonWrapper } from 'components/AuthForms/AuthForm.styles';
import { H1 } from 'components/CommonStyles/Topography';
import { dictionary } from 'pages';
import { PATH, ROLES } from 'routes/constants';
import {
  ButtonLeftPlusIcon,
  CreateAppointmentButton,
  PatientsButton,
  PatientsButtonsContainer,
  UserPageTitle,
} from './NavigatePanel.styles';
import isActiveTab from './utils';

export interface NavigatePanelProps {
  pageTitle: string
  setSearchTerm?: Dispatch<SetStateAction<string>>;
}

export const PatientNavigatePanel:React.VFC<NavigatePanelProps> = ({ pageTitle }) => (
  <>
    <PatientsButtonsContainer>
      <PatientsButton to={PATH.PROFILE} $active={isActiveTab(dictionary.patientPage.buttonProfile)}>{dictionary.patientPage.buttonProfile}</PatientsButton>
      <PatientsButton
        to={PATH.APPOINTMENTS(ROLES.PATIENT)}
        $active={isActiveTab(dictionary.patientPage.buttonAppointments)}
      >
        {dictionary.patientPage.buttonAppointments}
      </PatientsButton>
      <PatientsButton to={PATH.PATIENT_RESOLUTIONS} $active={isActiveTab(dictionary.patientPage.buttonResolutions)}>{dictionary.patientPage.buttonResolutions}</PatientsButton>
    </PatientsButtonsContainer>
    <UserPageTitle>
      <H1>{ pageTitle }</H1>
      <ButtonWrapper>
        <ButtonLeftPlusIcon />
        <CreateAppointmentButton to={PATH.CREATE_APPOINTMENT}>
          {dictionary.patientPage.createAppointments}
        </CreateAppointmentButton>
      </ButtonWrapper>
    </UserPageTitle>
  </>
);
