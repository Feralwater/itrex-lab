import React, { useEffect } from 'react';
import DoctorFullState from '../FullStateView/DoctorFullState';
import DoctorEmptyState from '../EmptyStateView/DoctorEmptyState';
import DoctorNavigatePanel from '../../components/NavigatePanel/DoctorNavigatePanel';
import AppointmentsWrapper from './AppointmentsContainer.styles';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { appointmentsForDoctor } from '../../redux/actions/appointmentsForDoctors.actions';
import dictionary from '../dictionary/pagesDictionary';
import { resolutions } from '../../redux/actions/resolution.actions';

const AppointmentsForDoctorContainer: React.VFC = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.profile.id);
  const appointments = useAppSelector((state) => state.appointmentsForDoctor.appointments);
  const totalAppointmentsCount = useAppSelector((state) => state.appointmentsForDoctor.total);
  const resolutionStatus = useAppSelector((state) => state.resolution.status);

  useEffect(() => {
    if (userId) {
      dispatch(appointmentsForDoctor.pending({
        offset: 0,
        limit: 12,
      }));
    }
  }, [userId, totalAppointmentsCount, dispatch, resolutionStatus]);

  useEffect(() => {
    dispatch(resolutions.pending({
      offset: 0,
      limit: 12,
    }));
  }, [dispatch, resolutionStatus]);
  const doctorsResolutions = useAppSelector((state) => state.resolutions.resolutions);
  const myObserver = new IntersectionObserver((elements) => {
    if (elements[0].intersectionRatio !== 0) {
      console.log('The element is in view!');
    } else {
      console.log('The element is out of view');
    }
  });

  const myEl = document.querySelector('#scrollingBlock');
  console.log(myEl);
  // eslint-disable-next-line no-unused-expressions
  myEl && myObserver.observe(myEl);
  return (
    <>
      <DoctorNavigatePanel pageTitle={dictionary.doctorPage.patientsTitle} />
      <AppointmentsWrapper patientsLength={appointments.length}>
        {appointments.length > 0
          ? (
            <DoctorFullState
              appointments={appointments}
              total={totalAppointmentsCount}
              doctorsResolutions={doctorsResolutions}
            />
          )
          : (
            <>
              <DoctorEmptyState />
              <div
                style={{
                  height: '10px',
                  backgroundColor: 'red',
                  width: '90vw',
                }}
                id="scrollingBlock"
              />
            </>
          )}
      </AppointmentsWrapper>
    </>
  );
};

export default AppointmentsForDoctorContainer;
