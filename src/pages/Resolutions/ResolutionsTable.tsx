import { ResolutionForDoctor, ResolutionForPatient } from 'resources/resolutions/resolutions.types';
import React from 'react';
import {
  ResolutionsTableContainer,
  ResolutionsTableHead,
  ResolutionsTableHeaderCell,
  Table,
} from 'pages/Resolutions/Resolutions.styles';
import { columnsNames } from 'pages/Resolutions/constants';
import { ResolutionsTableBody } from 'pages/Resolutions/ResolutionsTableBody';

interface ResolutionsTableProps{
  myResolutions: Array<ResolutionForPatient> | Array<ResolutionForDoctor>
}
export const ResolutionsTable:React.VFC<ResolutionsTableProps> = ({ myResolutions }) => (
  <ResolutionsTableContainer>
    <Table>
      <thead>
        <ResolutionsTableHead>
          {Object.entries(columnsNames)
            .map(([key, value]) => (
              <ResolutionsTableHeaderCell
                as="th"
                key={key}
              >
                {value}
              </ResolutionsTableHeaderCell>
            ))}
        </ResolutionsTableHead>
      </thead>
      <ResolutionsTableBody myResolutions={myResolutions} />
    </Table>
  </ResolutionsTableContainer>
);
