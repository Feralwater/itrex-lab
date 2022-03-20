import React, { Dispatch, SetStateAction } from 'react';
import { H1 } from 'components/CommonStyles/Topography';
import { NavigatePanel } from 'components/NavigatePanel/NavigatePanel';
import { patientTabs } from 'components/NavigatePanel/constants';
import { CreateAppointmentButton } from 'components/NavigatePanel/CreateAppointmentButton';
import { Sorts } from 'pages/Resolutions/Sorts';
import { dictionary } from 'pages';
import { UserPageTitle } from './NavigatePanel.styles';

export interface NavigatePanelProps {
  pageTitle: string;
  setSearchTerm?: Dispatch<SetStateAction<string>>;
  setSpecialisationID?: Dispatch<SetStateAction<string>>;
}

export const PatientNavigatePanel: React.VFC<NavigatePanelProps> = (
  { pageTitle, setSearchTerm, setSpecialisationID },
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
