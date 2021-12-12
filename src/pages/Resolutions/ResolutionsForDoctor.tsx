import React, { useEffect } from 'react';
import { format } from 'date-fns';
import Loader from 'react-loader-spinner';
import DoctorNavigatePanel from '../../components/NavigatePanel/DoctorNavigatePanel';
import dictionary from '../dictionary/pagesDictionary';
import { columnsNames, resolutionsOnPage, visitDate } from './constants';
import ResolutionRow from './ResolutionRow';
import { ResolutionsTable, ResolutionsTableHead, ResolutionsTableHeaderCell } from './Resolutions.styles';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { resolutions } from '../../redux/actions';
import ResolutionsPaginate from './ResolutionsPaginate';
import { selectResolutions } from '../../redux/reducers';
import { colors } from '../../components';

const ResolutionsForDoctor = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resolutions.pending({
      offset: 0,
      limit: resolutionsOnPage,
    }));
  }, [dispatch]);
  const { resolutions: myResolutions, status: responseStatus } = useAppSelector(selectResolutions);
  return (
    <div>
      <DoctorNavigatePanel pageTitle={dictionary.doctorPage.resolutionsTitle} />
      {responseStatus !== 'loading'
        ? (
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
    </div>
  );
};

export default ResolutionsForDoctor;
