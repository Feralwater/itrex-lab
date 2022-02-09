import React, { useState } from 'react';
import { useFetchDoctorsAppointments } from 'modules/hooks/useFetchDoctorsAppointments';
import { DoctorNavigatePanel } from 'components';
import { useAppointmentRef } from 'modules/hooks/useLastAppointmentRef';
import { dictionary } from 'pages/dictionary/pagesDictionary';
import { MainPageView } from 'modules/MainPageView';
import { DoctorFullState } from 'modules/doctor/DoctorFullState';
import { DoctorEmptyState } from 'modules/doctor/DoctorEmptyState';

export const AppointmentsForDoctorContainer: React.VFC = () => {
  const [, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const { responseStatus, appointments, isMoreAppointments } = useFetchDoctorsAppointments(pageNumber);
  const { lastAppointmentRef } = useAppointmentRef({ responseStatus, isMoreAppointments, setPageNumber });

  return (
    <>
      <DoctorNavigatePanel pageTitle={dictionary.doctorPage.patientsTitle} setSearchTerm={setSearchTerm} />
      <MainPageView
        fullState={<DoctorFullState appointments={appointments} ref={lastAppointmentRef} />}
        emptyState={<DoctorEmptyState />}
        responseStatus={responseStatus}
        appointmentsLength={appointments.length}
      />
    </>
  );
};
