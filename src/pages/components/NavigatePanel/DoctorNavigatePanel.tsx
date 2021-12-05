import React from 'react';
import { ButtonWrapper } from 'forms/authForms/authForm.styles';
import {
  PatientsButton, PatientsButtonsContainer, PatientsHeader, PatientsTitle,
} from 'pages/components/NavigatePanel/NavigatePanel.styles';
import dictionary from '../../../dictionary/dictionary';
import { PATH } from '../../../routes/constants';

const DoctorNavigatePanel: React.VFC = () => (
  <>
    <PatientsButtonsContainer>
      <PatientsButton
        to={PATH.PATIENTS}
        active={window.location.pathname.substr(1) === dictionary.doctorPage.buttonPatients.toLocaleLowerCase()}
      >
        {dictionary.doctorPage.buttonPatients}
      </PatientsButton>
      <PatientsButton
        to={PATH.RESOLUTIONS}
        active={window.location.pathname.substr(1) === dictionary.doctorPage.buttonResolutions.toLocaleLowerCase()}
      >
        {dictionary.doctorPage.buttonResolutions}
      </PatientsButton>
    </PatientsButtonsContainer>
    <PatientsHeader>
      <PatientsTitle>{dictionary.doctorPage.title}</PatientsTitle>
      <ButtonWrapper>
        search + sort
      </ButtonWrapper>
    </PatientsHeader>
  </>
);

export default DoctorNavigatePanel;
