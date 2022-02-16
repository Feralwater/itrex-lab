import React from 'react';
import { SkeletonCard, SkeletonCards } from 'components/Skeleton';
import { FETCH_STATUS } from 'redux/reducers/constants';
import { AppointmentsWrapper } from './MainPageView.styles';
import { MainPage } from './MainPage.types';

export const MainPageView = React.forwardRef(({
  appointmentsLength,
  responseStatus,
  fullState,
  emptyState,
  totalAppointmentsCount,
}:MainPage, ref) => {
  const isAppointmentsEmpty = responseStatus === FETCH_STATUS.FULFILLED && appointmentsLength === 0;
  const isMoreAppointments = totalAppointmentsCount !== appointmentsLength;
  return (
    <>
      <AppointmentsWrapper isAppointmentsEmpty={isAppointmentsEmpty}>
        {fullState}
        { isMoreAppointments && <SkeletonCard ref={ref} /> }
        {responseStatus === FETCH_STATUS.LOADING && <SkeletonCards />}
      </AppointmentsWrapper>
      {isAppointmentsEmpty && emptyState}
    </>
  );
});
