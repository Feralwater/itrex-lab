import React from 'react';
import { MedicalHistoryContainer, MedicalHistoryText } from 'modules/EmptyStateView/EmptyState.styles';
import { EmptyState } from 'modules/EmptyStateView/EmptyState.types';

export const EmptyStateView:React.VFC<EmptyState> = (
  { EmptyStateIcon, emptyHistoryTextLine1, emptyHistoryTextLine2 },
) => (
  <MedicalHistoryContainer>
    {EmptyStateIcon}
    <MedicalHistoryText>
      <span>{emptyHistoryTextLine1}</span>
      <span>{emptyHistoryTextLine2}</span>
    </MedicalHistoryText>
  </MedicalHistoryContainer>
);
