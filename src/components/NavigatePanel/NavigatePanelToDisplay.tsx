import React, { Dispatch, SetStateAction } from 'react';
import { DoctorNavigatePanel } from 'components/NavigatePanel/DoctorNavigatePanel';
import { dictionary } from 'pages';
import { PatientNavigatePanel } from 'components/NavigatePanel/PatientNavigatePanel';
import { ROLES } from 'routes/constants';
import { RoleName } from 'redux/reducers/reducers.types';

interface NavigatePanelToDisplayProps{
  roleName?: RoleName
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

export const NavigatePanelToDisplay:React.VFC<NavigatePanelToDisplayProps> = ({ roleName, setSearchTerm }) => {
  if (roleName === ROLES.DOCTOR) {
    return <DoctorNavigatePanel pageTitle={dictionary.doctorPage.resolutionsTitle} setSearchTerm={setSearchTerm} />;
  }
  return <PatientNavigatePanel pageTitle={dictionary.patientPage.resolutionsTitle} setSearchTerm={setSearchTerm} />;
};
