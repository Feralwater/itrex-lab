import React from 'react';
import { PatientsButton, PatientsButtonsContainer } from 'components/NavigatePanel/NavigatePanel.styles';

interface NavigatePanelButton{
  path: string
  text: string
}

const isActiveTab = (tabText: string) => window.location.pathname.includes(tabText.toLocaleLowerCase());

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
