import React from 'react';
import { SkeletonCards } from 'components/Skeleton';
import { FETCH_STATUS } from 'redux/reducers/constants';
import { AppointmentsWrapper, HiddenBlock } from './MainPageView.styles';
import { MainPage } from './MainPage.types';

export const MainPageView = React.forwardRef(({
  appointmentsLength,
  responseStatus,
  fullState,
  emptyState,
}:MainPage, ref) => {
  const isAppointmentsEmpty = responseStatus === FETCH_STATUS.FULFILLED && appointmentsLength === 0;
  return (
    <>
      <AppointmentsWrapper isAppointmentsEmpty={isAppointmentsEmpty}>
        {fullState}
        <HiddenBlock ref={ref as React.RefObject<HTMLDivElement>} />
        {responseStatus === FETCH_STATUS.LOADING && <SkeletonCards />}
      </AppointmentsWrapper>
      {isAppointmentsEmpty && emptyState}
    </>
  );
});
