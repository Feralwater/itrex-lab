import React, { useState } from 'react';
import AppointmentsWrapper from './AppointmentsContainer.styles';
import { PatientFullState } from '../FullStateView';
import { PatientEmptyState } from '../EmptyStateView';
import { PatientNavigatePanel } from '../../components';
import { dictionary } from '../dictionary/pagesDictionary';
import { FETCH_STATUS } from '../../redux/reducers/constants';
import 'react-loading-skeleton/dist/skeleton.css';
import { SkeletonCards } from '../../components/Skeleton';
import { useFetchPatientsCards } from './useFetchPatientsCards';
import { useAppointmentRef } from './useLastAppointmentRef';

export const AppointmentsForPatientContainer:React.VFC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { responseStatus, appointments, isMoreAppointments } = useFetchPatientsCards(pageNumber);
  const { lastAppointmentRef } = useAppointmentRef({ responseStatus, isMoreAppointments, setPageNumber });
  return (
    <>
      <PatientNavigatePanel pageTitle={dictionary.patientPage.title} />
      <AppointmentsWrapper patientsLength={appointments.length}>
        {responseStatus === FETCH_STATUS.FULFILLED && (appointments.length > 0
          ? (
            <PatientFullState
              appointments={appointments}
              ref={lastAppointmentRef}
            />
          )
          : <PatientEmptyState />)}
      </AppointmentsWrapper>
      {responseStatus === FETCH_STATUS.LOADING && <SkeletonCards />}
    </>
  );
};
