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
      <PatientsButton to="" color="white">{dictionary.patientPage.buttonProfile}</PatientsButton>
      <PatientsButton to="/my-appointments" color="blue">{dictionary.patientPage.buttonAppointments}</PatientsButton>
      <PatientsButton to="" color="white">{dictionary.patientPage.buttonResolutions}</PatientsButton>
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

export default AppointmentsWrapperHeader;
