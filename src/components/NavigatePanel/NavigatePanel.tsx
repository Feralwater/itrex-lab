import React from 'react';
import { PatientsButton, PatientsButtonsContainer } from 'components/NavigatePanel/NavigatePanel.styles';
import isActiveTab from 'components/NavigatePanel/utils';

interface NavigatePanelButton{
  path: string
  text: string
}

interface NavigatePanelProps {
  buttonOnNavigatePanel: NavigatePanelButton[]
}

export const NavigatePanel:React.VFC<NavigatePanelProps> = ({ buttonOnNavigatePanel }) => (
  <PatientsButtonsContainer>
    {buttonOnNavigatePanel.map((tab) => (
      <PatientsButton
        to={tab.path}
        $active={isActiveTab(tab.text)}
      >
        {tab.text}
      </PatientsButton>
    )) }
  </PatientsButtonsContainer>
);
