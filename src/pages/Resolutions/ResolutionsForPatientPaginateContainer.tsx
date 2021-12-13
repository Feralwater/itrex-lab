import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectResolutionsForPatient } from '../../redux/reducers/resolutionsForPatient.reducer';
import { ResolutionsPaginate } from './ResolutionsPaginate';
import { resolutionsOnPage } from './constants';
import { resolutionsForPatient } from '../../redux/actions';

export const ResolutionsForPatientPaginateContainer: React.VFC = () => {
  const dispatch = useAppDispatch();
  const { total: totalCount } = useAppSelector(selectResolutionsForPatient);

  const handleClick = (currentPageNumber: { selected: number }) => {
    dispatch(resolutionsForPatient.pending({
      offset: currentPageNumber.selected * resolutionsOnPage,
      limit: resolutionsOnPage,
    }));
  };

  return (<ResolutionsPaginate handleClick={handleClick} totalCount={totalCount} />);
};
