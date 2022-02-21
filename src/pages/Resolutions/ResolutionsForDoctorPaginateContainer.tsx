import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { resolutionsSlice, selectResolutions } from 'redux/reducers';
import { resolutionsOnPage } from './constants';
import { ResolutionsPaginate } from './ResolutionsPaginate';

export const ResolutionsForDoctorPaginateContainer = () => {
  const dispatch = useAppDispatch();
  const { total: totalCount } = useAppSelector(selectResolutions);

  const handleClick = useCallback((currentPageNumber: { selected: number }) => {
    dispatch(resolutionsSlice.actions.pending({
      offset: currentPageNumber.selected * resolutionsOnPage,
      limit: resolutionsOnPage,
    }));
  }, [dispatch]);

  return (<ResolutionsPaginate handleClick={handleClick} totalCount={totalCount} />);
};
