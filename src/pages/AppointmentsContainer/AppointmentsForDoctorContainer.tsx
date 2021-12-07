import React, { useEffect } from 'react';
import DoctorFullState from '../FullStateView/DoctorFullState';
import DoctorEmptyState from '../EmptyStateView/DoctorEmptyState';
import DoctorNavigatePanel from '../components/NavigatePanel/DoctorNavigatePanel';
import AppointmentsWrapper from './AppointmentsContainer.styles';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { appointmentsForDoctor } from '../../redux/actions/appointmentsForDoctors.actions';
import dictionary from '../dictionary/pagesDictionary';
import { resolutions } from '../../redux/actions/resolution.actions';

const AppointmentsForDoctorContainer:React.VFC = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.profile.id);
  const appointments = useAppSelector((state) => state.appointmentsForDoctor.appointments);
  const total = useAppSelector((state) => state.appointmentsForDoctor.total);
  const resolutionStatus = useAppSelector((state) => state.resolution.status);

  useEffect(() => {
    if (userId) {
      dispatch(appointmentsForDoctor.pending({ offset: 0, limit: 100 }));
    }
  }, [userId, total, dispatch, resolutionStatus]);

  useEffect(() => {
    dispatch(resolutions.pending({ offset: 0, limit: 100 }));
  }, [dispatch, resolutionStatus]);
  const doctorsResolutions = useAppSelector((state) => state.resolutions.resolutions);
  return (
    <>
      <DoctorNavigatePanel pageTitle={dictionary.doctorPage.patientsTitle} />
      <AppointmentsWrapper patientsLength={appointments.length}>
        {appointments.length > 0
          ? <DoctorFullState appointments={appointments} total={total} doctorsResolutions={doctorsResolutions} />
          : <DoctorEmptyState />}
      </AppointmentsWrapper>
    </>
  );
};

export default AppointmentsForDoctorContainer;
