import React, { memo } from 'react';
import { UserPageTitle, SearchAndFilter } from 'components/NavigatePanel/NavigatePanel.styles';
import { H1 } from 'components/CommonStyles/Topography';
import { NavigatePanelProps } from 'components/NavigatePanel/PatientNavigatePanel';
import { NavigatePanel } from 'components/NavigatePanel/NavigatePanel';
import { doctorTabs, filterOptionsForDoctor } from 'components/NavigatePanel/constants';
import { SelectForMainViewContainer } from 'components/Select/SelectForMainViewContainer';
import { dictionary } from 'pages';
import { InputSearchContainer } from '../Input';

export const DoctorNavigatePanel: React.VFC<NavigatePanelProps> = memo((
  { pageTitle, setSearchTerm, setFilterQuery, setPageNumber, }) => (
  <>
    <NavigatePanel buttonOnNavigatePanel={doctorTabs} />
    <UserPageTitle>
      <H1>{pageTitle}</H1>
      <SearchAndFilter>
        <SelectForMainViewContainer
          options={filterOptionsForDoctor}
          name="filter"
          id="filter"
          labelText={dictionary.doctorPage.filterTitle}
          placeholder={dictionary.doctorPage.filterPlaceholder}
          setFilterQuery={setFilterQuery}
          setPageNumber={setPageNumber}
        />
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
          setPageNumber={setPageNumber}
        />
      </SearchAndFilter>
    </UserPageTitle>
  </>
));
