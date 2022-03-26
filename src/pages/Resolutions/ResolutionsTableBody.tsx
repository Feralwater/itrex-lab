import { ResolutionForDoctor, ResolutionForPatient } from 'resources/resolutions/resolutions.types';
import { ResolutionRow } from 'pages/Resolutions/ResolutionRow';
import { format } from 'date-fns';
import { visitDate } from 'pages/Resolutions/constants';
import React from 'react';

interface ResolutionsTableBodyProps{
  myResolutions: Array<ResolutionForPatient> | Array<ResolutionForDoctor>
}

export const ResolutionsTableBody:React.VFC<ResolutionsTableBodyProps> = ({ myResolutions }) => (
  <tbody>
    {myResolutions.map((resolution) => (
      <ResolutionRow
        key={resolution.id}
        firstName={'doctor' in resolution ? resolution.doctor.first_name : resolution?.patient?.first_name}
        lastName={'doctor' in resolution ? resolution.doctor.last_name : resolution?.patient?.last_name}
        resolution={resolution.resolution}
        visitDate={format(new Date(resolution.visit_date), visitDate)}
        nextAppointmentDate={format(new Date(resolution.next_appointment_date), visitDate)}
      />
    ))}
  </tbody>
);
