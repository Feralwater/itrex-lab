import React from 'react';
import { ButtonWrapper } from 'pages/components/AuthForms/AuthForm.styles';
import {
  PatientsButton, PatientsButtonsContainer, PatientsHeader, PatientsTitle,
} from 'pages/components/NavigatePanel/NavigatePanel.styles';
import dictionary from '../../dictionary/pagesDictionary';
import { PATH } from '../../../routes/constants';
import { NavigatePanelProps } from '../../AppointmentsContainer/AppointmentsContainer.types';
import isActiveTab from './helpers';

const DoctorNavigatePanel: React.VFC<NavigatePanelProps> = ({ pageTitle }) => (
  <>
    <PatientsButtonsContainer>
      <PatientsButton
        to={PATH.PATIENTS}
        $active={isActiveTab(dictionary.doctorPage.buttonPatients)}
      >
        {dictionary.doctorPage.buttonPatients}
      </PatientsButton>
      <PatientsButton
        to={PATH.RESOLUTIONS}
        $active={isActiveTab(dictionary.doctorPage.buttonResolutions)}
      >
        {dictionary.doctorPage.buttonResolutions}
      </PatientsButton>
    </PatientsButtonsContainer>
    <PatientsHeader>
      <PatientsTitle>{pageTitle}</PatientsTitle>
      <ButtonWrapper>
        search + sort
      </ButtonWrapper>
    </PatientsHeader>
  </>
);

export default DoctorNavigatePanel;
