import React, { useState } from 'react';
import { PatientNavigatePanel } from 'components';
import { dictionary } from 'pages/dictionary/pagesDictionary';
import 'react-loading-skeleton/dist/skeleton.css';
import { useAppointmentsOnScreen } from 'modules/hooks/useAppointmentsOnScreen';
import { MainPageView } from 'modules/MainPageView';
import { PatientFullState } from 'modules/patient/PatientFullState';
import { PatientEmptyState } from 'modules/patient/PatientEmptyState';
import { useFetchAppointments } from 'modules/hooks/useFetchAppointments';
import { useAppSelector } from 'hooks';
import { selectAppointmentsForPatient } from 'redux/reducers';

export const AppointmentsForPatientContainer:React.VFC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { appointments, responseStatus, isMore: isMoreAppointments } = useAppSelector(selectAppointmentsForPatient);
  const { hiddenBlockRef } = useAppointmentsOnScreen({ responseStatus, isMoreAppointments, setPageNumber });
  useFetchAppointments(pageNumber);
  return (
    <>
      <PatientNavigatePanel pageTitle={dictionary.patientPage.title} />
      <MainPageView
        ref={hiddenBlockRef}
        fullState={<PatientFullState appointments={appointments} />}
        emptyState={<PatientEmptyState />}
        responseStatus={responseStatus}
        appointmentsLength={appointments.length}
        isMoreAppointments={isMoreAppointments}
      />
    </>
  );
};
