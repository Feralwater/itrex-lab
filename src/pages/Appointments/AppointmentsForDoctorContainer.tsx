import React, { useState } from 'react';
import { useFetchDoctorsAppointments } from 'pages/Appointments/useFetchDoctorsAppointments';
import { DoctorNavigatePanel } from 'components';
import { FETCH_STATUS } from 'redux/reducers/constants';
import { SkeletonCards } from 'components/Skeleton';
import { DoctorEmptyState, DoctorFullState } from 'modules/doctor';
import { dictionary } from '../dictionary/pagesDictionary';
import AppointmentsWrapper from './AppointmentsContainer.styles';
import { useAppointmentRef } from './useLastAppointmentRef';

export const AppointmentsForDoctorContainer: React.VFC = () => {
  const [, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const { responseStatus, appointments, isMoreAppointments } = useFetchDoctorsAppointments(pageNumber);
  const { lastAppointmentRef } = useAppointmentRef({ responseStatus, isMoreAppointments, setPageNumber });

  return (
    <>
      <DoctorNavigatePanel pageTitle={dictionary.doctorPage.patientsTitle} setSearchTerm={setSearchTerm} />
      <AppointmentsWrapper patientsLength={appointments.length}>
        {responseStatus === FETCH_STATUS.FULFILLED && (appointments.length > 0
          ? (
            <DoctorFullState
              appointments={appointments}
              ref={lastAppointmentRef}
            />
          )
          : <DoctorEmptyState />)}
      </AppointmentsWrapper>
      {responseStatus === FETCH_STATUS.LOADING && <SkeletonCards />}
    </>
  );
};
