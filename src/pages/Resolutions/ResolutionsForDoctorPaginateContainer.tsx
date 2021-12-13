import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectResolutions } from '../../redux/reducers';
import { resolutionsOnPage } from './constants';
import { resolutions } from '../../redux/actions';
import { ResolutionsPaginate } from './ResolutionsPaginate';

export const ResolutionsForDoctorPaginateContainer = () => {
  const dispatch = useAppDispatch();
  const { total: totalCount } = useAppSelector(selectResolutions);

  const handleClick = (currentPageNumber: { selected: number }) => {
    dispatch(resolutions.pending({
      offset: currentPageNumber.selected * resolutionsOnPage,
      limit: resolutionsOnPage,
    }));
  };

  return (<ResolutionsPaginate handleClick={handleClick} totalCount={totalCount} />);
};
