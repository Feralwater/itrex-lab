import { useAppDispatch, useAppSelector } from 'hooks';
import { resolutionsForDoctorSlice, selectProfile } from 'redux/reducers';
import { resolutionsOnPage } from 'pages/Resolutions/constants';
import { useEffect } from 'react';
import { PATH, ROLES } from 'routes/constants';
import { resolutionsForPatientSlice } from 'redux/reducers/resolutionsForPatient.reducer';
import { useNavigate } from 'react-router-dom';

export const useFetchResolutions = (currentPage:number, searchTerm?: string, specializationID?:string) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { roleName } = useAppSelector(selectProfile);
  const slice = roleName === ROLES.DOCTOR ? resolutionsForDoctorSlice : resolutionsForPatientSlice;
  useEffect(() => {
    dispatch(slice.actions.pending({
      offset: (currentPage - 1) * resolutionsOnPage,
      limit: resolutionsOnPage,
      name: searchTerm,
      specializationID,
    }));
    if (roleName === ROLES.DOCTOR) {
      navigate(`${PATH.DOCTOR_RESOLUTIONS.replace(':currentPageNumber', '')}${currentPage}`);
    }
    if (roleName === ROLES.PATIENT) {
      navigate(`${PATH.PATIENT_RESOLUTIONS.replace(':currentPageNumber', '')}${currentPage}`);
    }
  }, [currentPage, searchTerm, specializationID]);
};
