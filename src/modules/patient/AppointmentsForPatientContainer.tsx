import React, { useState } from 'react';
import { PatientNavigatePanel } from 'components';
import { useFetchPatientsAppointments } from 'modules/hooks/useFetchPatientsAppointments';
import { dictionary } from 'pages/dictionary/pagesDictionary';
import 'react-loading-skeleton/dist/skeleton.css';
import { useAppointmentRef } from 'modules/hooks/useLastAppointmentRef';
import { MainPageView } from 'modules/MainPageView';
import { PatientFullState } from 'modules/patient/PatientFullState';
import { PatientEmptyState } from 'modules/patient/PatientEmptyState';

export const AppointmentsForPatientContainer:React.VFC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { responseStatus, appointments, isMoreAppointments } = useFetchPatientsAppointments(pageNumber);
  const { lastAppointmentRef } = useAppointmentRef({ responseStatus, isMoreAppointments, setPageNumber });
  return (
    <>
      <PatientNavigatePanel pageTitle={dictionary.patientPage.title} />
      <MainPageView
        fullState={<PatientFullState appointments={appointments} ref={lastAppointmentRef} />}
        emptyState={<PatientEmptyState />}
        responseStatus={responseStatus}
        appointmentsLength={appointments.length}
      />
    </>
  );
};
