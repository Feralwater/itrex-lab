import React, { Dispatch, SetStateAction } from 'react';
import { ButtonWrapper } from 'components/AuthForms/AuthForm.styles';
import { H1 } from 'components/CommonStyles/Topography';
import { dictionary } from 'pages';
import { NavigatePanel } from 'components/NavigatePanel/NavigatePanel';
import { filterOptionsForPatient, patientTabs } from 'components/NavigatePanel/constants';
import { SelectForMainViewContainer } from 'components/Select/SelectForMainViewContainer';
import { CreateAppointmentButton } from 'components/NavigatePanel/CreateAppointmentButton';
import {
  ButtonLeftPlusIcon,
  FilterAndButtonContainer,
  UserPageTitle,
} from './NavigatePanel.styles';
import { Sorts } from 'pages/Resolutions/Sorts';
import { dictionary } from 'pages';
import { UserPageTitle } from './NavigatePanel.styles';

export interface NavigatePanelProps {
  pageTitle: string;
  setSearchTerm?: Dispatch<SetStateAction<string>>;
  setPageNumber?: Dispatch<SetStateAction<number>>;
  setFilterQuery?: Dispatch<SetStateAction<string>>;
  setSpecialisationID?: Dispatch<SetStateAction<string>>;
}

export const PatientNavigatePanel: React.VFC<NavigatePanelProps> = (
  { pageTitle, setSearchTerm,setSpecialisationID, setFilterQuery, setPageNumber, }
) => (
  <>
    <NavigatePanel buttonOnNavigatePanel={patientTabs} />
    <UserPageTitle>
      <H1>{pageTitle}</H1>
      {pageTitle === dictionary.doctorPage.resolutionsTitle
        ? <Sorts setSearchTerm={setSearchTerm} setSpecialisationID={setSpecialisationID} />
        : <CreateAppointmentButton />}
    </UserPageTitle>
  </>
);
