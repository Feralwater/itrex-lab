import React, { useEffect } from 'react';
import { PatientNavigatePanel } from '../../components';
import dictionary from '../dictionary/pagesDictionary';
import { resolutionsOnPage, resolutionsOnPageOffset } from './constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { resolutionsForPatient } from '../../redux/actions';
import { Resolutions } from './Resolutions';
import { selectResolutionsForPatient } from '../../redux/reducers/resolutionsForPatient.reducer';

export const ResolutionsForPatientContainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resolutionsForPatient.pending({
      offset: resolutionsOnPageOffset,
      limit: resolutionsOnPage,
    }));
  }, [dispatch]);
  const { resolutions: myResolutions, status: responseStatus } = useAppSelector(selectResolutionsForPatient);
  return (
    <div>
      <PatientNavigatePanel pageTitle={dictionary.patientPage.resolutionsTitle} />
      <Resolutions responseStatus={responseStatus} myResolutions={myResolutions} />
    </div>
  );
};
