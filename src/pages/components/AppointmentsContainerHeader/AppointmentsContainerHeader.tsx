import React from 'react';
import {
  ButtonLeftPlusIcon,
  CreateAppointmentButton,
  PatientsButton,
  PatientsButtonsContainer,
  PatientsHeader,
  PatientsTitle,
} from './AppointmentsContainerHeader.styles';
import { ButtonWrapper } from '../../../forms/authForms/authForm.styles';
import dictionary from '../../../dictionary/dictionary';
import { AppointmentsWrapperHeaderPropsType } from './AppointmentsContainerHeader.types';

const AppointmentsWrapperHeader: React.VFC<AppointmentsWrapperHeaderPropsType> = ({ role_name }) => {
  function chooseButtons(role: string) {
    switch (role) {
      case 'doctor':
        return (
          <>
            <PatientsButton to="" color="blue">{dictionary.buttonsText.buttonPatients}</PatientsButton>
            <PatientsButton to="" color="white">{dictionary.buttonsText.buttonResolutions}</PatientsButton>
          </>
        );
      case 'Patient':
        return (
          <>
            <PatientsButton to="" color="white">{dictionary.buttonsText.buttonProfile}</PatientsButton>
            <PatientsButton to="" color="blue">{dictionary.buttonsText.buttonAppointments}</PatientsButton>
            <PatientsButton to="" color="white">{dictionary.buttonsText.buttonResolutions}</PatientsButton>
          </>
        );
      default:
        return '';
    }
  }

  return (
    <>
      <PatientsButtonsContainer>
        {chooseButtons(role_name)}
      </PatientsButtonsContainer>
      <PatientsHeader>
        <PatientsTitle>{role_name === 'doctor' ? 'My Patients' : 'My Appointments'}</PatientsTitle>
        {
          role_name === 'Patient' && (
          <ButtonWrapper>
            <ButtonLeftPlusIcon />
            <CreateAppointmentButton to="/make-an-appointment">
              {dictionary.buttonsText.createAppointments}
            </CreateAppointmentButton>
          </ButtonWrapper>
          )
                }
      </PatientsHeader>
    </>
  );
};

export default AppointmentsWrapperHeader;
