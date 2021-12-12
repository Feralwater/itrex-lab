import React from 'react';
import {
  PatientsButton, PatientsButtonsContainer, UserPageTitle, PatientsTitle, SearchAndFilter,
} from 'components/NavigatePanel/NavigatePanel.styles';
import dictionary from '../../pages/dictionary/pagesDictionary';
import { PATH } from '../../routes/constants';
import { NavigatePanelProps } from '../../pages/AppointmentsContainer/AppointmentsContainer.types';
import isActiveTab from './helpers';
import InputSearchContainer from '../Input/InputSearchContainer';
import SelectForSortContainer from '../Select/SelectForSortContainer';
import { optionsForSearchSelect } from './constants';

const DoctorNavigatePanel: React.VFC<NavigatePanelProps> = ({ pageTitle }) => (
  <>
    <PatientsButtonsContainer>
      <PatientsButton
        to={PATH.PATIENTS}
        $active={isActiveTab(dictionary.doctorPage.buttonPatients)}
      >
        {dictionary.doctorPage.buttonPatients}
      </PatientsButton>
      <PatientsButton
        to={PATH.RESOLUTIONS}
        $active={isActiveTab(dictionary.doctorPage.buttonResolutions)}
      >
        {dictionary.doctorPage.buttonResolutions}
      </PatientsButton>
    </PatientsButtonsContainer>
    <UserPageTitle>
      <PatientsTitle>{pageTitle}</PatientsTitle>
      <SearchAndFilter>
        <InputSearchContainer
          label=""
          inputName="search"
          type="text"
          icon="left"
          iconURL="/svgImages/search-icon.svg"
          placeholder="Search"
          inputSize="small"
        />
        <SelectForSortContainer
          labelText=""
          id=""
          name=""
          options={optionsForSearchSelect}
        />
      </SearchAndFilter>
    </UserPageTitle>
  </>
);

export default DoctorNavigatePanel;
