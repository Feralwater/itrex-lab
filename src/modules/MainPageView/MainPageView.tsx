import React from 'react';
import { FETCH_STATUS } from 'redux/reducers/constants';
import { SkeletonCards } from 'components/Skeleton';
import { AppointmentsWrapper } from './MainPageView.styles';
import { MainPage } from './MainPage.types';

export const MainPageView: React.VFC<MainPage> = ({
  appointmentsLength,
  responseStatus,
  fullState,
  emptyState,
}) => {
  if (responseStatus === FETCH_STATUS.LOADING) {
    return <SkeletonCards />;
  }
  const whatShouldToRender = appointmentsLength > 0 ? fullState : emptyState;
  return (
    <AppointmentsWrapper appointmentsLength={appointmentsLength}>
      {responseStatus === FETCH_STATUS.FULFILLED && whatShouldToRender}
    </AppointmentsWrapper>
  );
};
