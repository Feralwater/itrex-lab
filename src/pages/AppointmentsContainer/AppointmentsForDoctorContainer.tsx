import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from 'react-loader-spinner';
import { DoctorFullState } from '../FullStateView';
import { DoctorEmptyState } from '../EmptyStateView';
import { DoctorNavigatePanel, colors } from '../../components';
import AppointmentsWrapper from './AppointmentsContainer.styles';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { appointmentsForDoctor, resolutions } from '../../redux/actions';
import dictionary from '../dictionary/pagesDictionary';
import {
  selectAppointmentsForDoctor, selectProfile, selectResolution,
} from '../../redux/reducers';

export const AppointmentsForDoctorContainer: React.VFC = () => {
  const dispatch = useAppDispatch();
  const { id: userId } = useAppSelector(selectProfile);
  const { total: totalAppointmentsCount, appointments, responseStatus } = useAppSelector(selectAppointmentsForDoctor);
  const { total: totalResolutionsCount } = useAppSelector(selectResolution);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    if (userId) {
      dispatch(appointmentsForDoctor.pending({
        offset: (currentPage - 1) * 12,
        limit: 12,
      }));
      dispatch(resolutions.pending({
        offset: 0,
        limit: 120,
      }));
    }
  }, [userId, totalAppointmentsCount, currentPage, dispatch, totalResolutionsCount]);
  function chooseWhatToDisplay() {
    if (responseStatus !== FETCH_STATUS.LOADING) {
      return appointments.length > 0
        ? (
          <DoctorFullState
            appointments={appointments}
            total={totalAppointmentsCount}
          />
        )
        : (
          <DoctorEmptyState />
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
      <DoctorNavigatePanel pageTitle={dictionary.doctorPage.patientsTitle} />
      <InfiniteScroll
        dataLength={appointments.length}
        next={() => setCurrentPage((prevPage) => prevPage + 1)}
        hasMore
        loader={(
          <Loader
            type="MutatingDots"
            color={colors.cornflower_blue}
            secondaryColor={colors.radical_red}
            timeout={5000}
            height={150}
            width={150}
          />
)}
        height="68vh"
      >
        <AppointmentsWrapper patientsLength={appointments.length}>
          {chooseWhatToDisplay()}
        </AppointmentsWrapper>
      </InfiniteScroll>
    </>
  );
};
