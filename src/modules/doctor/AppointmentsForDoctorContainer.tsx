import React, { useState } from 'react';
import { useFetchDoctorsAppointments } from 'modules/hooks/useFetchDoctorsAppointments';
import { DoctorNavigatePanel } from 'components';
import { dictionary } from 'pages/dictionary/pagesDictionary';
import { MainPageView } from 'modules/MainPageView';
import { DoctorFullState } from 'modules/doctor/DoctorFullState';
import { DoctorEmptyState } from 'modules/doctor/DoctorEmptyState';
import { useAppointmentsOnScreen } from 'modules/hooks/useAppointmentsOnScreen';
import { useFetchAppointments } from 'modules/hooks/useFetchAppointments';
import { useAppSelector } from 'hooks';
import { selectAppointmentsForDoctor } from 'redux/reducers';

export const AppointmentsForDoctorContainer: React.VFC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const { appointments, status, isMore: isMoreAppointments } = useAppSelector(selectAppointmentsForDoctor);
  const { hiddenBlockRef } = useAppointmentsOnScreen({ responseStatus: status, isMoreAppointments, setPageNumber });
  useFetchAppointments(pageNumber, searchTerm);
  return (
    <>
      <DoctorNavigatePanel
        pageTitle={dictionary.doctorPage.patientsTitle}
        setPageNumber={setPageNumber}
        setSearchTerm={setSearchTerm}
      />
      <MainPageView
        ref={hiddenBlockRef}
        fullState={<DoctorFullState appointments={appointments} />}
        emptyState={<DoctorEmptyState />}
        responseStatus={status}
        appointmentsLength={appointments.length}
        isMoreAppointments={isMoreAppointments}
      />
    </>
  );
};
