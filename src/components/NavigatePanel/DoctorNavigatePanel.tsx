import React from 'react';
import {
  PatientsButton, PatientsButtonsContainer, UserPageTitle, SearchAndFilter,
} from 'components/NavigatePanel/NavigatePanel.styles';
import { H1 } from 'components/CommonStyles/Topography';
import { dictionary } from 'pages';
import { PATH, ROLES } from 'routes/constants';
import { NavigatePanelProps } from 'components/NavigatePanel/PatientNavigatePanel';
import isActiveTab from './utils';
import { InputSearchContainer } from '../Input';

export const DoctorNavigatePanel: React.VFC<NavigatePanelProps> = ({ pageTitle, setSearchTerm }) => (
  <>
    <PatientsButtonsContainer>
      <PatientsButton
        to={PATH.APPOINTMENTS(ROLES.DOCTOR)}
        $active={isActiveTab(dictionary.doctorPage.buttonPatients)}
      >
        {dictionary.doctorPage.buttonPatients}
      </PatientsButton>
      <PatientsButton
        to={PATH.DOCTOR_RESOLUTIONS}
        $active={isActiveTab(dictionary.doctorPage.buttonResolutions)}
      >
        {dictionary.doctorPage.buttonResolutions}
      </PatientsButton>
    </PatientsButtonsContainer>
    <UserPageTitle>
      <H1>{pageTitle}</H1>
      <SearchAndFilter>
        <InputSearchContainer
          label=""
          id="search"
          type="text"
          icon="left"
          iconURL="/svg/search-icon.svg"
          placeholder="Search"
          isRequire={false}
          inputSize="small"
          setSearchTerm={setSearchTerm}
        />
      </SearchAndFilter>
    </UserPageTitle>
  </>
);
