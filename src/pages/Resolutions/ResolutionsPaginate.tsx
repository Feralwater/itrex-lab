import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { PATH, ROLES } from 'routes/constants';
import { selectProfile, selectResolutions } from 'redux/reducers';
import { useAppSelector } from 'hooks';
import { useOnPageChange } from 'pages/Resolutions/hooks/useOnPageChange';
import { selectResolutionsForPatient } from 'redux/reducers/resolutionsForPatient.reducer';
import { resolutionsOnPage } from './constants';
import { ReactComponent as NextIcon } from '../../assets/svg/rightArrowGrey-icon.svg';
import { ReactComponent as PrevIcon } from '../../assets/svg/leftArrowGrey-icon.svg';
import { Paginate, StyledPaginateContainer } from './ResolutionsPaginate.styles';
import { dictionary } from '../dictionary/pagesDictionary';

export const ResolutionsPaginate = () => {
  const { currentPageNumber = 1 } = useParams();
  const { total: doctorsResolutionsTotalCount } = useAppSelector(selectResolutions);
  const { total: patientsResolutionsTotalCount } = useAppSelector(selectResolutionsForPatient);
  const { roleName } = useAppSelector(selectProfile);
  const totalResolutionsCount = roleName === ROLES.DOCTOR ? doctorsResolutionsTotalCount : patientsResolutionsTotalCount;
  const [currentPage, setCurrentPage] = useState<number>(Number(currentPageNumber));
  const navigate = useNavigate();
  const handleClick = useOnPageChange({ setCurrentPage });
  const pagesCount = Math.ceil(totalResolutionsCount / resolutionsOnPage);
  const fromItem = (Number(currentPageNumber) - 1) * resolutionsOnPage + 1;
  const toItem = Math.min((Number(currentPageNumber) - 1) * resolutionsOnPage + resolutionsOnPage, totalResolutionsCount);
  useEffect(() => {
    if (roleName === ROLES.DOCTOR) {
      navigate(`${PATH.DOCTOR_RESOLUTIONS.replace(':currentPageNumber', '')}${currentPage}`);
    }
    if (roleName === ROLES.PATIENT) {
      navigate(`${PATH.PATIENT_RESOLUTIONS.replace(':currentPageNumber', '')}${currentPage}`);
    }
  }, [currentPage]);

  return (
    <Paginate>
      <div>
        {`${dictionary.paginate.resultsText} ${fromItem}-${toItem} ${dictionary.paginate.resultsPronoun} ${totalResolutionsCount}`}
      </div>
      <StyledPaginateContainer>
        <ReactPaginate
          nextLabel={<NextIcon />}
          onPageChange={handleClick}
          pageCount={pagesCount}
          previousLabel={<PrevIcon />}
          initialPage={Number(currentPageNumber) - 1}
        />
      </StyledPaginateContainer>
    </Paginate>
  );
};
