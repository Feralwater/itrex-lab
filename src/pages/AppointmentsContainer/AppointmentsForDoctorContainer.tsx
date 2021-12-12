import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import DoctorFullState from '../FullStateView/DoctorFullState';
import DoctorEmptyState from '../EmptyStateView/DoctorEmptyState';
import DoctorNavigatePanel from '../../components/NavigatePanel/DoctorNavigatePanel';
import AppointmentsWrapper from './AppointmentsContainer.styles';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { appointmentsForDoctor } from '../../redux/actions';
import dictionary from '../dictionary/pagesDictionary';
import {
  selectAppointmentsForDoctor, selectProfile, selectResolution,
} from '../../redux/reducers';

const AppointmentsForDoctorContainer: React.VFC = () => {
  const dispatch = useAppDispatch();
  const { id: userId } = useAppSelector(selectProfile);
  const { total: totalAppointmentsCount, appointments } = useAppSelector(selectAppointmentsForDoctor);
  const { total: totalResolutionsCount } = useAppSelector(selectResolution);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    if (userId) {
      dispatch(appointmentsForDoctor.pending({
        offset: (currentPage - 1) * 12,
        limit: 12,
      }));
    }
  }, [userId, totalAppointmentsCount, currentPage, dispatch, totalResolutionsCount]);

  return (
    <>
      <DoctorNavigatePanel pageTitle={dictionary.doctorPage.patientsTitle} />
      <InfiniteScroll
        dataLength={appointments.length}
        next={() => setCurrentPage((prevPage) => prevPage + 1)}
        hasMore
        loader={<h4>Loading...</h4>}
        height="68vh"
        endMessage={(
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        )}
      >
        <AppointmentsWrapper patientsLength={appointments.length}>
          {appointments.length > 0
            ? (
              <DoctorFullState
                appointments={appointments}
                total={totalAppointmentsCount}
              />
            )
            : (
              <DoctorEmptyState />
            )}
        </AppointmentsWrapper>
      </InfiniteScroll>
    </>
  );
};

export default AppointmentsForDoctorContainer;
