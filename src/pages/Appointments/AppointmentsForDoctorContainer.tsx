import React, { useEffect, useState } from 'react';
import { DoctorFullState } from '../FullStateView';
import { DoctorEmptyState } from '../EmptyStateView';
import { DoctorNavigatePanel } from '../../components';
import AppointmentsWrapper from './AppointmentsContainer.styles';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { cardsForDoctor } from '../../redux/actions';
import { dictionary } from '../dictionary/pagesDictionary';
import { selectCardsForDoctor, selectProfile } from '../../redux/reducers';
import { FETCH_STATUS } from '../../redux/reducers/constants';
import { SkeletonCards } from '../../components/Skeleton';
import { appointmentsOnPage, appointmentsOnPageOffset } from './constants';

export const AppointmentsForDoctorContainer: React.VFC = () => {
  const dispatch = useAppDispatch();
  const { id: userId } = useAppSelector(selectProfile);
  const { cards: appointments, status: responseStatus } = useAppSelector(selectCardsForDoctor);
  const { roleName } = useAppSelector(selectProfile);
  const [, setSearchTerm] = useState('');

  useEffect(() => {
    if (userId) {
      dispatch(cardsForDoctor.pending({
        offset: appointmentsOnPageOffset,
        limit: appointmentsOnPage,
      }));
    }
  }, [userId]);

  return (
    <>
      <DoctorNavigatePanel pageTitle={dictionary.doctorPage.patientsTitle} setSearchTerm={setSearchTerm} />
      {responseStatus === FETCH_STATUS.LOADING ? <SkeletonCards />
        : (
          <AppointmentsWrapper patientsLength={appointments.length}>
            {appointments.length > 0
              ? (
                <DoctorFullState
                  roleName={roleName}
                  appointments={appointments}
                />
              )
              : (<DoctorEmptyState />)}
          </AppointmentsWrapper>
        )}
    </>
  );
};
