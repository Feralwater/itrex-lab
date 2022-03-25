import React from 'react';
import { ResolutionsTable } from 'pages/Resolutions/Resolutions.styles';
import { TableHead } from 'modules/admin/userTable/TableHead';
import { TableBody } from 'modules/admin/userTable/TableBody';
import { AllPatientsState } from 'redux/reducers/reducers.types';

export interface Users{
  users: AllPatientsState[]
  specializationCell?: boolean
}

export const UserTable:React.VFC<Users> = ({ users, specializationCell }) => (
  <ResolutionsTable>
    <TableHead specializationCell={specializationCell} />
    <TableBody users={users} />
  </ResolutionsTable>
);
