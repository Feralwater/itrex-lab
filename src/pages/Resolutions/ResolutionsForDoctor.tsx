import React, { useEffect } from 'react';
import { format } from 'date-fns';
import DoctorNavigatePanel from '../components/NavigatePanel/DoctorNavigatePanel';
import dictionary from '../dictionary/pagesDictionary';
import { columnsNames, resolutionsOnPage } from './constants';
import ResolutionRow from './ResolutionRow';
import { ResolutionsTable, ResolutionsTableHead, ResolutionsTableHeaderCell } from './Resolutions.styles';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { resolutions } from '../../redux/actions/resolution.actions';
import ResolutionsPaginate from './ResolutionsPaginate';

const ResolutionsForDoctor = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resolutions.pending({
      offset: 0,
      limit: resolutionsOnPage,
    }));
  }, [dispatch]);
  const myResolutions = useAppSelector((state) => state.resolutions.resolutions);
  return (
    <div>
      <DoctorNavigatePanel pageTitle={dictionary.doctorPage.resolutionsTitle} />
      <ResolutionsTable>
        <thead>
          <ResolutionsTableHead>
            {Object.entries(columnsNames)
              .map(([key, value]) => <ResolutionsTableHeaderCell as="th" key={key}>{value}</ResolutionsTableHeaderCell>)}
          </ResolutionsTableHead>
        </thead>
        <tbody>
          {myResolutions.map((resolution) => (
            <ResolutionRow
              key={resolution.id}
              firstName={resolution.patient.first_name}
              lastName={resolution.patient.last_name}
              resolution={resolution.resolution}
              visitDate={format(new Date(resolution.visit_date), 'MM/dd/yy')}
              nextAppointmentDate={format(new Date(resolution.next_appointment_date), 'MM/dd/yy')}
            />
          ))}
        </tbody>
      </ResolutionsTable>
      <ResolutionsPaginate />
    </div>
  );
};

export default ResolutionsForDoctor;
