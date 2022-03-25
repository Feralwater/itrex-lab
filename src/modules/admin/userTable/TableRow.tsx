import React from 'react';
import { ResolutionsTableCell, ResolutionsTableRow } from 'pages/Resolutions/Resolutions.styles';
import { SettingsButton } from 'components/AppointmentCard/AppointmentCard.styles';
import { RoleName } from 'redux/reducers/reducers.types';

interface TableRowProps {
  firstName: string
  lastName: string
  photo: string
  roleName: RoleName
  specializationName?: string
}

export const TableRow: React.VFC<TableRowProps> = ({
  firstName,
  lastName,
  photo,
  roleName,
  specializationName,
}) => (
  <ResolutionsTableRow>
    <ResolutionsTableCell><img src={photo} alt="" /></ResolutionsTableCell>
    <ResolutionsTableCell>{roleName}</ResolutionsTableCell>
    <ResolutionsTableCell>{firstName}</ResolutionsTableCell>
    <ResolutionsTableCell>{lastName}</ResolutionsTableCell>
    {specializationName && <ResolutionsTableCell>{specializationName}</ResolutionsTableCell>}
    <ResolutionsTableCell><SettingsButton /></ResolutionsTableCell>
  </ResolutionsTableRow>
);
