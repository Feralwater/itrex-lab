import React from 'react';
import { FETCH_STATUS } from 'redux/reducers/constants';
import { SkeletonCards } from 'components/Skeleton';
import { AppointmentsWrapper, HiddenBlock } from './MainPageView.styles';
import { MainPage } from './MainPage.types';

export const MainPageView = React.forwardRef(({
  appointmentsLength,
  responseStatus,
  fullState,
  emptyState,
}:MainPage, ref) => (
  <>
    <AppointmentsWrapper appointmentsLength={appointmentsLength}>
      {fullState}
      <HiddenBlock ref={ref as React.RefObject<HTMLDivElement>} />
    </AppointmentsWrapper>
    {responseStatus === FETCH_STATUS.LOADING && <SkeletonCards />}
    {appointmentsLength < 0 && responseStatus === FETCH_STATUS.FULFILLED && emptyState}
  </>
));
