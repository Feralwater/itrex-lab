import React from 'react';
import {
  ButtonLeftPlusIcon,
  CreateAppointmentButton,
  PatientsButton,
  PatientsButtonsContainer,
  PatientsHeader,
  PatientsTitle,
} from './PatientsContainerHeader.styles';
import { ButtonWrapper } from '../../../../../forms/Form.styles';
import dictionary from '../../../../../dictionary/dictionary';

type PatientsContainerHeaderPropsType = {
    userType: string
}

const PatientsContainerHeader: React.VFC<PatientsContainerHeaderPropsType> = ({ userType }) => {
  function chooseButtons(role: string) {
    switch (role) {
      case 'doctor':
        return (
          <>
            <PatientsButton to="" color="blue">{dictionary.buttonsText.buttonPatients}</PatientsButton>
            <PatientsButton to="" color="white">{dictionary.buttonsText.buttonResolutions}</PatientsButton>
          </>
        );
      case 'patient':
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
        {chooseButtons(userType)}
      </PatientsButtonsContainer>
      <PatientsHeader>
        <PatientsTitle>{userType === 'doctor' ? 'My Patients' : 'My Appointments'}</PatientsTitle>
        {
                    userType === 'patient' && (
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

export default PatientsContainerHeader;
