import React, { useState } from 'react';
import { DoctorNavigatePanel } from '../../components';
import { dictionary } from '../dictionary/pagesDictionary';
import { FETCH_STATUS } from '../../redux/reducers/constants';
import { SkeletonCards } from '../../components/Skeleton';
import { useFetchDoctorsCards } from './useFetchDoctorsCards';
import { DoctorFullState } from '../FullStateView';
import { DoctorEmptyState } from '../EmptyStateView';
import AppointmentsWrapper from './AppointmentsContainer.styles';
import { useAppointmentRef } from './useLastAppointmentRef';

export const AppointmentsForDoctorContainer: React.VFC = () => {
  const [, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const { responseStatus, appointments, isMoreAppointments } = useFetchDoctorsCards(pageNumber);
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
