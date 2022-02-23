import React from 'react';
import { DoctorNavigatePanel } from 'components/NavigatePanel/DoctorNavigatePanel';
import { dictionary } from 'pages';
import { PatientNavigatePanel } from 'components/NavigatePanel/PatientNavigatePanel';
import { ROLES } from 'routes/constants';
import { RoleName } from 'redux/reducers/reducers.types';

interface NavigatePanelToDisplayProps{
  roleName?: RoleName
}

export const NavigatePanelToDisplay:React.VFC<NavigatePanelToDisplayProps> = ({ roleName }) => {
  if (roleName === ROLES.DOCTOR) {
    return <DoctorNavigatePanel pageTitle={dictionary.doctorPage.resolutionsTitle} />;
  }
  return <PatientNavigatePanel pageTitle={dictionary.patientPage.resolutionsTitle} />;
};
