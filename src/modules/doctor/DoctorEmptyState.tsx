import React from 'react';
import { EmptyStateView } from 'modules/EmptyStateView/EmptyStateView';
import { ReactComponent as MedicalHistory } from 'assets/svg/medical-history.svg';
import { dictionary } from 'pages/dictionary/pagesDictionary';

export const DoctorEmptyState:React.VFC = () => (
  <EmptyStateView
    EmptyStateIcon={<MedicalHistory />}
    emptyHistoryTextLine1={dictionary.doctorPage.emptyMedicalHistoryTextLine1}
    emptyHistoryTextLine2={dictionary.doctorPage.emptyMedicalHistoryTextLine2}
  />
);
