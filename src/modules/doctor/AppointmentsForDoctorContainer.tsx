import React, { useState } from 'react';
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
  const { appointments, responseStatus, isMore: isMoreAppointments } = useAppSelector(selectAppointmentsForDoctor);
  const { hiddenBlockRef } = useAppointmentsOnScreen({ responseStatus, isMoreAppointments, setPageNumber });
  const [filterQuery, setFilterQuery] = useState<string>('dateSort');
  useFetchAppointments(pageNumber, filterQuery, searchTerm);
  return (
    <>
      <DoctorNavigatePanel
        pageTitle={dictionary.doctorPage.patientsTitle}
        setPageNumber={setPageNumber}
        setSearchTerm={setSearchTerm}
        setFilterQuery={setFilterQuery}
      />
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
