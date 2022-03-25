import React, { Dispatch, SetStateAction } from 'react';
import { H1 } from 'components/CommonStyles/Topography';
import { NavigatePanel } from 'components/NavigatePanel/NavigatePanel';
import { patientTabs } from 'components/NavigatePanel/constants';
import { CreateAppointmentButton } from 'components/NavigatePanel/CreateAppointmentButton';
import { InputSearchContainer } from 'components/Input';
import { UserPageTitle } from './NavigatePanel.styles';

export interface NavigatePanelProps {
  pageTitle: string;
  setSearchTerm?: Dispatch<SetStateAction<string>>;
}

export const PatientNavigatePanel: React.VFC<NavigatePanelProps> = ({ pageTitle, setSearchTerm }) => (
  <>
    <NavigatePanel buttonOnNavigatePanel={patientTabs} />
    <UserPageTitle>
      <H1>{pageTitle}</H1>
      {pageTitle === 'Resolutions'
        ? (
          <InputSearchContainer
            label=""
            type="text"
            inputSize="large"
            placeholder="Search"
            id="resolutionSearch"
            icon="left"
            iconURL="/svg/search-icon.svg"
            isRequire={false}
            setSearchTerm={setSearchTerm}
          />
        )
        : <CreateAppointmentButton />}
    </UserPageTitle>
  </>
);
