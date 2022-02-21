import React, { Dispatch, memo, SetStateAction } from 'react';
import { ButtonWrapper } from 'components/AuthForms/AuthForm.styles';
import { H1 } from 'components/CommonStyles/Topography';
import { dictionary } from 'pages';
import { PATH } from 'routes/constants';
import { NavigatePanel } from 'components/NavigatePanel/NavigatePanel';
import { patientTabs } from 'components/NavigatePanel/constants';
import { ButtonLeftPlusIcon, CreateAppointmentButton, UserPageTitle } from './NavigatePanel.styles';

export interface NavigatePanelProps {
  pageTitle: string;
  setSearchTerm?: Dispatch<SetStateAction<string>>;
}

export const PatientNavigatePanel:React.VFC<NavigatePanelProps> = ({ pageTitle }) => (
  <>
    <NavigatePanel buttonOnNavigatePanel={patientTabs} />
    <UserPageTitle>
      <H1>{ pageTitle }</H1>
      <ButtonWrapper>
        <ButtonLeftPlusIcon />
        <CreateAppointmentButton to={PATH.CREATE_APPOINTMENT}>
          {dictionary.patientPage.createAppointments}
        </CreateAppointmentButton>
      </ButtonWrapper>
    </UserPageTitle>
  </>
);

export const MemoPatientNavigatePanel = memo(PatientNavigatePanel);
