import { format } from 'date-fns';
import Loader from 'react-loader-spinner';
import React from 'react';
import { ResolutionsTable, ResolutionsTableHead, ResolutionsTableHeaderCell } from './Resolutions.styles';
import { columnsNames, visitDate } from './constants';
import { ResolutionRow } from './ResolutionRow';
import { colors } from '../../components';
import { ResolutionsPaginate } from './ResolutionsPaginate';
import { ResolutionsProps } from './Resolutions.types';

export const Resolutions:React.VFC<ResolutionsProps> = ({ responseStatus, myResolutions }) => (
  <>
    {responseStatus !== 'loading'
      ? (
        <ResolutionsTable>
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
          <tbody>
            {myResolutions.map((resolution) => (
              <ResolutionRow
                key={resolution.id}
                firstName={resolution.patient ? resolution.patient.first_name : resolution.doctor.first_name}
                lastName={resolution.patient ? resolution.patient.last_name : resolution.doctor.last_name}
                resolution={resolution.resolution}
                visitDate={format(new Date(resolution.visit_date), visitDate)}
                nextAppointmentDate={format(new Date(resolution.next_appointment_date), visitDate)}
              />
            ))}
          </tbody>
        </ResolutionsTable>
      )
      : (
        <Loader
          type="MutatingDots"
          color={colors.cornflower_blue}
          secondaryColor={colors.radical_red}
          timeout={5000}
          height={150}
          width={150}
        />
      )}
    {myResolutions.length > 0 && <ResolutionsPaginate />}
  </>
);
