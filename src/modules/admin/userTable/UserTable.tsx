import React from 'react';
import { TableHead } from 'modules/admin/userTable/TableHead';
import { TableBody } from 'modules/admin/userTable/TableBody';
import { AllPatientsState } from 'redux/reducers/reducers.types';

export interface Users{
  users: AllPatientsState[]
}

export const UserTable:React.VFC<Users> = ({ users }) => (
  <table>
    <TableHead />
    <TableBody users={users} />
  </table>
);
