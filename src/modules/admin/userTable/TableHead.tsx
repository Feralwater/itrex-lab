import React from 'react';
import { ResolutionsTableHead } from 'pages/Resolutions/Resolutions.styles';
import { tableColumnsNames } from 'modules/admin/userTable/constants';
import { TableHeaderCell } from 'modules/admin/userTable/Table.styles';

export const TableHead = () => (
  <thead>
    <ResolutionsTableHead>
      {Object.entries(tableColumnsNames)
        .map(([key, value]) => (
          <TableHeaderCell
            as="th"
            key={key}
          >
            {value}
          </TableHeaderCell>
        ))}
    </ResolutionsTableHead>
  </thead>
);
