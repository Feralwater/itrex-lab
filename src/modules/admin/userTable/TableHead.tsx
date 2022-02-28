import React from 'react';
import { ResolutionsTableHead } from 'pages/Resolutions/Resolutions.styles';
import { tableDoctorsColumnsNames, tablePatientsColumnsNames } from 'modules/admin/userTable/constants';
import { TableHeaderCell } from 'modules/admin/userTable/Table.styles';

export interface TableHeadProps{
  specializationCell?: boolean
}

export const TableHead:React.VFC<TableHeadProps> = ({ specializationCell }) => {
  const tableColumnsNames = specializationCell ? tableDoctorsColumnsNames : tablePatientsColumnsNames;
  return (
    <thead>
      <ResolutionsTableHead>
        {Object.entries(tableColumnsNames)
          .map(([key, value]) => (
            <TableHeaderCell
              as="th"
              key={key}
              specializationCell={specializationCell}
            >
              {value}
            </TableHeaderCell>
          ))}
      </ResolutionsTableHead>
    </thead>
  );
};
