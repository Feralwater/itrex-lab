import React from 'react';
import { ButtonWrapper } from 'components/AuthForms/AuthForm.styles';
import { AppointmentButton, ButtonLeftPlusIcon } from 'components/NavigatePanel/NavigatePanel.styles';
import { PATH } from 'routes/constants';
import { dictionary } from 'pages';

export const CreateAppointmentButton = () => (
  <ButtonWrapper>
    <ButtonLeftPlusIcon />
    <AppointmentButton to={PATH.CREATE_APPOINTMENT}>
      {dictionary.patientPage.createAppointments}
    </AppointmentButton>
  </ButtonWrapper>
);
