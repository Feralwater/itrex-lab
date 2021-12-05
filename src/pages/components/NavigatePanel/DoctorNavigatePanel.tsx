import React from 'react';
import { ButtonWrapper } from 'forms/authForms/authForm.styles';
import {
  PatientsButton, PatientsButtonsContainer, PatientsHeader, PatientsTitle,
} from 'pages/components/NavigatePanel/NavigatePanel.styles';
import dictionary from '../../../dictionary/dictionary';
import { PATH } from '../../../routes/constants';
import { DoctorNavigatePanelProps } from '../../AppointmentsContainer/AppointmentsContainer.types';
import isActiveTab from './helpers';

const DoctorNavigatePanel: React.VFC<DoctorNavigatePanelProps> = ({ pageTitle }) => (
  <>
    <PatientsButtonsContainer>
      <PatientsButton
        to={PATH.PATIENTS}
        isActive={isActiveTab(dictionary.doctorPage.buttonPatients)}
      >
        {dictionary.doctorPage.buttonPatients}
      </PatientsButton>
      <PatientsButton
        to={PATH.RESOLUTIONS}
        isActive={isActiveTab(dictionary.doctorPage.buttonResolutions)}
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
