import React, { useState } from 'react';
import { PatientNavigatePanel } from 'components';
import { FETCH_STATUS } from 'redux/reducers/constants';
import { SkeletonCards } from 'components/Skeleton';
import { useFetchPatientsAppointments } from 'pages/Appointments/useFetchPatientsAppointments';
import AppointmentsWrapper from './AppointmentsContainer.styles';
import { PatientFullState } from '../FullStateView';
import { PatientEmptyState } from '../EmptyStateView';
import { dictionary } from '../dictionary/pagesDictionary';
import 'react-loading-skeleton/dist/skeleton.css';
import { useAppointmentRef } from './useLastAppointmentRef';

export const AppointmentsForPatientContainer:React.VFC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { responseStatus, appointments, isMoreAppointments } = useFetchPatientsAppointments(pageNumber);
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
