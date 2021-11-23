import React from 'react';
import {
  ButtonLeftPlusIcon,
  CreateAppointmentButton,
  PatientsButton,
  PatientsButtonsContainer,
  PatientsHeader,
  PatientsTitle,
} from './appointmentsHeader.styles';
import { ButtonWrapper } from '../../../../forms/authForms/authForm.styles';
import dictionary from '../../../../dictionary/dictionary';

const AppointmentsWrapperHeader: React.VFC = () => (
  <>
    <PatientsButtonsContainer>
      <PatientsButton to="" color="white">{dictionary.buttonsText.buttonProfile}</PatientsButton>
      <PatientsButton to="/appointments" color="blue">{dictionary.buttonsText.buttonAppointments}</PatientsButton>
      <PatientsButton to="" color="white">{dictionary.buttonsText.buttonResolutions}</PatientsButton>
    </PatientsButtonsContainer>
    <PatientsHeader>
      <PatientsTitle>{dictionary.patientPage.title}</PatientsTitle>
      <ButtonWrapper>
        <ButtonLeftPlusIcon />
        <CreateAppointmentButton to="/create-an-appointment">
          {dictionary.buttonsText.createAppointments}
        </CreateAppointmentButton>
      </ButtonWrapper>
    </PatientsHeader>
  </>
);

export default AppointmentsWrapperHeader;
