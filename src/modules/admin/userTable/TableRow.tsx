import React from 'react';
import { ResolutionsTableCell, ResolutionsTableRow } from 'pages/Resolutions/Resolutions.styles';
import { SettingsButton } from 'components/AppointmentCard/AppointmentCard.styles';
import { RoleName } from 'redux/reducers/reducers.types';

interface TableRowProps{
  firstName: string
  lastName: string
  photo: string
  roleName: RoleName
}

export const TableRow:React.VFC<TableRowProps> = ({
  firstName,
  lastName,
  photo,
  roleName,
}) => (
  <ResolutionsTableRow>
    <ResolutionsTableCell><img src={photo} alt="" /></ResolutionsTableCell>
    <ResolutionsTableCell>{roleName}</ResolutionsTableCell>
    <ResolutionsTableCell>{firstName}</ResolutionsTableCell>
    <ResolutionsTableCell>{lastName}</ResolutionsTableCell>
    <ResolutionsTableCell><SettingsButton /></ResolutionsTableCell>
  </ResolutionsTableRow>
);
