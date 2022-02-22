import React, { memo } from 'react';
import { UserPageTitle, SearchAndFilter } from 'components/NavigatePanel/NavigatePanel.styles';
import { H1 } from 'components/CommonStyles/Topography';
import { NavigatePanelProps } from 'components/NavigatePanel/PatientNavigatePanel';
import { NavigatePanel } from 'components/NavigatePanel/NavigatePanel';
import { doctorTabs } from 'components/NavigatePanel/constants';
import { InputSearchContainer } from '../Input';

export const DoctorNavigatePanel: React.VFC<NavigatePanelProps> = memo(({ pageTitle, setSearchTerm }) => (
  <>
    <NavigatePanel buttonOnNavigatePanel={doctorTabs} />
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
));
