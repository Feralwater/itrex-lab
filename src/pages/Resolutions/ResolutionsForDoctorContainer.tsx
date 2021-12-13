import React, { useEffect } from 'react';
import { DoctorNavigatePanel } from '../../components';
import dictionary from '../dictionary/pagesDictionary';
import { resolutionsOnPage, resolutionsOnPageOffset } from './constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { resolutions } from '../../redux/actions';
import { selectResolutions } from '../../redux/reducers';
import { Resolutions } from './Resolutions';
import { ROLES } from '../../routes/constants';

export const ResolutionsForDoctorContainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resolutions.pending({
      offset: resolutionsOnPageOffset,
      limit: resolutionsOnPage,
    }));
  }, [dispatch]);
  const { resolutions: myResolutions, status: responseStatus } = useAppSelector(selectResolutions);
  return (
    <div>
      <DoctorNavigatePanel pageTitle={dictionary.doctorPage.resolutionsTitle} />
      <Resolutions responseStatus={responseStatus} myResolutions={myResolutions} role={ROLES.DOCTOR} />
    </div>
  );
};
