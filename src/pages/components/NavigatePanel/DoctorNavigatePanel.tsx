import React from 'react';
import { ButtonWrapper } from 'forms/authForms/authForm.styles';
import {
  PatientsButton, PatientsButtonsContainer, PatientsHeader, PatientsTitle,
} from 'pages/components/NavigatePanel/NavigatePanel.styles';
import dictionary from '../../../dictionary/dictionary';
import { PATH } from '../../../routes/constants';
import colors from '../../../styles/colors';

const DoctorNavigatePanel: React.VFC = () => (
  <>
    <PatientsButtonsContainer>
      <PatientsButton to={PATH.MY_PATIENTS} color={colors.cornflower_blue}>{dictionary.doctorPage.buttonPatients}</PatientsButton>
      <PatientsButton to={PATH.RESOLUTIONS} color={colors.white}>{dictionary.doctorPage.buttonResolutions}</PatientsButton>
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
