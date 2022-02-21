import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import {
  resolutionsForPatientSlice,
  selectResolutionsForPatient,
} from 'redux/reducers/resolutionsForPatient.reducer';
import { ROLES } from 'routes/constants';
import { PatientNavigatePanel } from 'components';
import { dictionary } from '../dictionary/pagesDictionary';
import { resolutionsOnPage, resolutionsOnPageOffset } from './constants';
import { Resolutions } from './Resolutions';

export const ResolutionsForPatientContainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resolutionsForPatientSlice.actions.pending({
      offset: resolutionsOnPageOffset,
      limit: resolutionsOnPage,
    }));
  }, [dispatch]);
  const { resolutions: myResolutions, status: responseStatus } = useAppSelector(selectResolutionsForPatient);
  return (
    <div>
      <PatientNavigatePanel pageTitle={dictionary.patientPage.resolutionsTitle} />
      <Resolutions responseStatus={responseStatus} myResolutions={myResolutions} role={ROLES.PATIENT} />
    </div>
  );
};
