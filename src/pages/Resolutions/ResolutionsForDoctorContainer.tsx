import React, { useEffect } from 'react';
import { DoctorNavigatePanel } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { resolutionsForDoctorSlice, selectResolutions } from 'redux/reducers';
import { dictionary } from '../dictionary/pagesDictionary';
import { resolutionsOnPage, resolutionsOnPageOffset } from './constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { resolutionsSlice, selectResolutions } from '../../redux/reducers';
import { Resolutions } from './Resolutions';
import { ROLES } from '../../routes/constants';

export const ResolutionsForDoctorContainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resolutionsForDoctorSlice.actions.pending({
      offset: resolutionsOnPageOffset,
      limit: resolutionsOnPage,
    }));
  }, []);
  const { resolutions: myResolutions, status: responseStatus } = useAppSelector(selectResolutions);
  return (
    <div>
      <DoctorNavigatePanel pageTitle={dictionary.doctorPage.resolutionsTitle} />
      <Resolutions responseStatus={responseStatus} myResolutions={myResolutions} />
    </div>
  );
};
