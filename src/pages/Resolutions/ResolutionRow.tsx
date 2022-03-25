import React from 'react';
import { SettingsButton } from 'components/AppointmentCard/AppointmentCard.styles';
import { ResolutionRowProps } from './Resolutions.types';
import { ResolutionsTableCell, ResolutionsTableRow } from './Resolutions.styles';

export const ResolutionRow: React.VFC<ResolutionRowProps> = ({
  firstName,
  lastName,
  resolution,
  visitDate,
  nextAppointmentDate,
}) => (

  <ResolutionsTableRow>
    <ResolutionsTableCell>{firstName}</ResolutionsTableCell>
    <ResolutionsTableCell>{lastName}</ResolutionsTableCell>
    <ResolutionsTableCell>{resolution}</ResolutionsTableCell>
    <ResolutionsTableCell>{visitDate}</ResolutionsTableCell>
    <ResolutionsTableCell>{nextAppointmentDate}</ResolutionsTableCell>
    <ResolutionsTableCell><SettingsButton /></ResolutionsTableCell>
  </ResolutionsTableRow>
);
