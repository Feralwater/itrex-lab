import React, { useState } from 'react';
import { useFetchDoctorsAppointments } from 'modules/hooks/useFetchDoctorsAppointments';
import { MemoDoctorNavigatePanel } from 'components';
import { dictionary } from 'pages/dictionary/pagesDictionary';
import { MainPageView } from 'modules/MainPageView';
import { DoctorFullState } from 'modules/doctor/DoctorFullState';
import { DoctorEmptyState } from 'modules/doctor/DoctorEmptyState';
import { useAppointmentsOnScreen } from 'modules/hooks/useAppointmentsOnScreen';

export const AppointmentsForDoctorContainer: React.VFC = () => {
  const [, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const { responseStatus, appointments, isMoreAppointments } = useFetchDoctorsAppointments(pageNumber);
  const { hiddenBlockRef } = useAppointmentsOnScreen({ responseStatus, isMoreAppointments, setPageNumber });

  return (
    <>
      <MemoDoctorNavigatePanel pageTitle={dictionary.doctorPage.patientsTitle} setSearchTerm={setSearchTerm} />
      <MainPageView
        ref={hiddenBlockRef}
        fullState={<DoctorFullState appointments={appointments} />}
        emptyState={<DoctorEmptyState />}
        responseStatus={responseStatus}
        appointmentsLength={appointments.length}
      />
    </>
  );
};
