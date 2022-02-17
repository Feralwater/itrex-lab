import { dictionary } from 'pages/dictionary/pagesDictionary';
import React from 'react';
import { EmptyStateView } from 'modules/EmptyStateView/EmptyStateView';
import { ReactComponent as AppointmentHistory } from 'assets/svg/appintments-history.svg';

export const PatientEmptyState:React.VFC = () => (
  <EmptyStateView
    EmptyStateIcon={<AppointmentHistory />}
    emptyHistoryTextLine1={dictionary.patientPage.emptyAppointmentsHistoryTextLine1}
    emptyHistoryTextLine2={dictionary.patientPage.emptyAppointmentsHistoryTextLine2}
  />
);
