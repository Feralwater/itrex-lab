import React, { useEffect } from 'react';
import AppointmentsWrapper from './AppointmentsContainer.styles';
import { PatientFullState } from '../FullStateView';
import { PatientEmptyState } from '../EmptyStateView';
import { PatientNavigatePanel } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { dictionary } from '../dictionary/pagesDictionary';
import { appointmentsForPatientSlice, selectMakeAppointmentsForPatient, selectProfile } from '../../redux/reducers';
import { FETCH_STATUS } from '../../redux/reducers/constants';
import 'react-loading-skeleton/dist/skeleton.css';
import { SkeletonCards } from '../../components/Skeleton';

export const AppointmentsForPatientContainer:React.VFC = () => {
  const dispatch = useAppDispatch();
  const { id: userId, roleName } = useAppSelector(selectProfile);
  const { appointments, total: totalAppointmentsCount, responseStatus } = useAppSelector(selectMakeAppointmentsForPatient);

  useEffect(() => {
    if (userId) {
      dispatch(appointmentsForPatientSlice.actions.pending({ offset: 0, limit: 100 }));
    }
  }, [userId]);

  return (
    <>
      <PatientNavigatePanel pageTitle={dictionary.patientPage.title} />
      {responseStatus === FETCH_STATUS.LOADING ? <SkeletonCards />
        : (
          <AppointmentsWrapper patientsLength={appointments.length}>
            {appointments.length > 0
              ? (
                <PatientFullState
                  roleName={roleName}
                  appointments={appointments}
                  total={totalAppointmentsCount}
                />
              )
              : (<PatientEmptyState />)}
          </AppointmentsWrapper>
        )}
    </>
  );
};
