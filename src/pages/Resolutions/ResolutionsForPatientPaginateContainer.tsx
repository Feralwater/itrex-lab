import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import {
  resolutionsForPatientSlice,
  selectResolutionsForPatient,
} from 'redux/reducers/resolutionsForPatient.reducer';
import { ResolutionsPaginate } from './ResolutionsPaginate';
import { resolutionsOnPage } from './constants';

export const ResolutionsForPatientPaginateContainer: React.VFC = () => {
  const dispatch = useAppDispatch();
  const { total: totalCount } = useAppSelector(selectResolutionsForPatient);

  const handleClick = useCallback((currentPageNumber: { selected: number }) => {
    dispatch(resolutionsForPatientSlice.actions.pending({
      offset: currentPageNumber.selected * resolutionsOnPage,
      limit: resolutionsOnPage,
    }));
  }, []);

  return (<ResolutionsPaginate handleClick={handleClick} totalCount={totalCount} />);
};
