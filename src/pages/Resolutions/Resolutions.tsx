import { format } from 'date-fns';
import Loader from 'react-loader-spinner';
import React from 'react';
import { colors } from 'components/CommonStyles';
import { FETCH_STATUS } from 'redux/reducers/constants';
import { ROLES } from 'routes/constants';
import { ResolutionForDoctor, ResolutionForPatient } from 'resources/resolutions/resolutions.types';
import {
  ResolutionsLoaderContainer,
  ResolutionsTable,
  ResolutionsTableHead,
  ResolutionsTableHeaderCell,
} from './Resolutions.styles';
import { columnsNames, visitDate } from './constants';
import { ResolutionRow } from './ResolutionRow';
import { ResolutionsProps } from './Resolutions.types';
import { ResolutionsForPatientPaginateContainer, ResolutionsPaginate } from '..';

function createResolutionsTableBody(myResolutions: Array<ResolutionForPatient> | Array<ResolutionForDoctor>) {
  return (
    <tbody>
      {myResolutions.map((resolution) => (
        <ResolutionRow
          key={resolution.id}
          firstName={'doctor' in resolution ? resolution.doctor.first_name : resolution.patient.first_name}
          lastName={'doctor' in resolution ? resolution.doctor.last_name : resolution.patient.last_name}
          resolution={resolution.resolution}
          visitDate={format(new Date(resolution.visit_date), visitDate)}
          nextAppointmentDate={format(new Date(resolution.next_appointment_date), visitDate)}
        />
      ))}
    </tbody>
  );
}

export const Resolutions:React.VFC<ResolutionsProps> = ({ responseStatus, myResolutions, role }) => (
  <>
    {responseStatus !== FETCH_STATUS.LOADING
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
          {createResolutionsTableBody(myResolutions)}
        </ResolutionsTable>
      )
      : (
        <ResolutionsLoaderContainer>
          <Loader
            type="MutatingDots"
            color={colors.cornflower_blue}
            secondaryColor={colors.radical_red}
            timeout={5000}
            height={150}
            width={150}
          />
        </ResolutionsLoaderContainer>
      )}
    {role === ROLES.PATIENT
      ? (myResolutions.length > 0 && <ResolutionsForPatientPaginateContainer />)
      : (myResolutions.length > 0 && <ResolutionsPaginate />)}
  </>
);
