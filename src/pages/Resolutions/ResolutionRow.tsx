import React from 'react';
import { ResolutionRowProps } from './Resolutions.types';
import { SettingsButton } from '../../components/AppointmentCard/AppointmentCard.styles';
import { ResolutionsTableCell, ResolutionsTableRow } from './Resolutions.styles';

const ResolutionRow: React.VFC<ResolutionRowProps> = ({
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

export default ResolutionRow;
