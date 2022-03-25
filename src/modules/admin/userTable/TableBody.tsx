import React from 'react';
import { TableRow } from 'modules/admin/userTable/TableRow';
import { Users } from 'modules/admin/userTable/UserTable';

export const TableBody:React.VFC<Users> = ({ users }) => (
  <tbody>
    {users.map((user) => (
      <TableRow
        photo={user.photo}
        roleName={user.roleName}
        key={user.userID}
        firstName={user.firsName}
        lastName={user.lastName}
      />
    ))}
  </tbody>
);
