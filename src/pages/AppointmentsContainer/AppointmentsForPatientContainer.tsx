import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import AppointmentsWrapper from './AppointmentsContainer.styles';
import { PatientFullState } from '../FullStateView';
import { PatientEmptyState } from '../EmptyStateView';
import { colors, PatientNavigatePanel } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { appointmentsForPatient } from '../../redux/actions';
import dictionary from '../dictionary/pagesDictionary';
import { selectAppointmentsForPatient, selectProfile } from '../../redux/reducers';
import { FETCH_STATUS } from '../../redux/reducers/constants';

export const AppointmentsForPatientContainer:React.VFC = () => {
  const dispatch = useAppDispatch();
  const { id: userId } = useAppSelector(selectProfile);
  const { appointments, total: totalAppointmentsCount, responseStatus } = useAppSelector(selectAppointmentsForPatient);

  useEffect(() => {
    if (userId) {
      dispatch(appointmentsForPatient.pending({ offset: 0, limit: 100 }));
    }
  }, [userId]);

  function chooseWhatToDisplay() {
    if (responseStatus !== FETCH_STATUS.LOADING) {
      return appointments.length > 0
        ? (
          <PatientFullState
            appointments={appointments}
            total={totalAppointmentsCount}
          />
        )
        : (
          <PatientEmptyState />
        );
    }
    return (
      <Loader
        type="MutatingDots"
        color={colors.cornflower_blue}
        secondaryColor={colors.radical_red}
        timeout={5000}
        height={150}
        width={150}
      />
    );
  }

  return (
    <>
      <PatientNavigatePanel pageTitle={dictionary.patientPage.title} />
      <AppointmentsWrapper patientsLength={appointments.length}>
        {chooseWhatToDisplay()}
      </AppointmentsWrapper>
    </>
  );
};
