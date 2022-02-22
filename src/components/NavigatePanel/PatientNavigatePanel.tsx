import React, { Dispatch, SetStateAction } from 'react';
import { ButtonWrapper } from 'components/AuthForms/AuthForm.styles';
import { H1 } from 'components/CommonStyles/Topography';
import { dictionary } from 'pages';
import { PATH } from 'routes/constants';
import { NavigatePanel } from 'components/NavigatePanel/NavigatePanel';
import { patientTabs, searchOptions } from 'components/NavigatePanel/constants';
import { SelectForPatientMainViewContainer } from 'components/Select/SelectForPatientMainViewContainer';
import {
  ButtonLeftPlusIcon,
  CreateAppointmentButton,
  FilterAndButtonContainer,
  UserPageTitle,
} from './NavigatePanel.styles';

export interface NavigatePanelProps {
  pageTitle: string;
  setSearchTerm?: Dispatch<SetStateAction<string>>;
  setPageNumber?: Dispatch<SetStateAction<number>>;
  setFilterQuery?: Dispatch<SetStateAction<string>>;
}

export const PatientNavigatePanel: React.VFC<NavigatePanelProps> = (
  { pageTitle, setFilterQuery, setPageNumber },
) => (
  <>
    <NavigatePanel buttonOnNavigatePanel={patientTabs} />
    <UserPageTitle>
      <H1>{pageTitle}</H1>
      <FilterAndButtonContainer>
        <SelectForPatientMainViewContainer
          options={searchOptions}
          name="filter"
          id="filter"
          labelText={dictionary.patientPage.filterTitle}
          placeholder={dictionary.patientPage.filterPlaceholder}
          setFilterQuery={setFilterQuery}
          setPageNumber={setPageNumber}
        />
        <ButtonWrapper>
          <ButtonLeftPlusIcon />
          <CreateAppointmentButton to={PATH.CREATE_APPOINTMENT}>
            {dictionary.patientPage.createAppointments}
          </CreateAppointmentButton>
        </ButtonWrapper>
      </FilterAndButtonContainer>
    </UserPageTitle>
  </>
);
