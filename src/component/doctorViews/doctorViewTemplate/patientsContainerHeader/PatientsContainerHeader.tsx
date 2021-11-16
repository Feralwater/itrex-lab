import React from 'react';
import {
  ButtonLeftPlusIcon,
  CreateAppointmentButton,
  PatientsButton,
  PatientsButtonsContainer,
  PatientsHeader,
  PatientsTitle,
} from './PatientsContainerHeader.styles';
import { ButtonWrapper } from '../../../forms/Form.styles';

type PatientsContainerHeaderPropsType = {
    userType: string
}

const PatientsContainerHeader: React.VFC<PatientsContainerHeaderPropsType> = ({ userType }) => {
  function chooseButtons(role: string) {
    switch (role) {
      case 'doctor':
        return (
          <>
            <PatientsButton to="" color="blue">Patients</PatientsButton>
            <PatientsButton to="" color="white">Resolutions</PatientsButton>
          </>
        );
      case 'patient':
        return (
          <>
            <PatientsButton to="" color="white">Profile</PatientsButton>
            <PatientsButton to="" color="blue">Appointments</PatientsButton>
            <PatientsButton to="" color="white">Resolutions</PatientsButton>
          </>
        );
      default:
        return '';
    }
  }

  return (
    <>
      <PatientsButtonsContainer>
        {chooseButtons(userType)}
      </PatientsButtonsContainer>
      <PatientsHeader>
        <PatientsTitle>{userType === 'doctor' ? 'My Patients' : 'My Appointments'}</PatientsTitle>
        {
                    userType === 'patient' && (
                    <ButtonWrapper>
                      <ButtonLeftPlusIcon />
                      <CreateAppointmentButton to="/make-an-appointment">
                        Create an appointment
                      </CreateAppointmentButton>
                    </ButtonWrapper>
                    )
                }
      </PatientsHeader>
    </>
  );
};

export default PatientsContainerHeader;
