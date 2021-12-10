import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { resolutionsOnPage } from './constants';
import { resolutions } from '../../redux/actions/resolution.actions';
import { ReactComponent as NextIcon } from '../../assets/svgImages/rightArrowGrey-icon.svg';
import { ReactComponent as PrevIcon } from '../../assets/svgImages/leftArrowGrey-icon.svg';
import { Paginate, StyledPaginateContainer } from './ResolutionsPaginate.styles';
import dictionary from '../dictionary/pagesDictionary';
import { selectResolutions } from '../../redux/reducers';

const ResolutionsPaginate: React.VFC = () => {
  const dispatch = useAppDispatch();
  const { total: totalCount } = useAppSelector(selectResolutions);
  const pagesCount = Math.ceil(totalCount / resolutionsOnPage);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageClick = (currentPageNumber: { selected: number }) => {
    dispatch(resolutions.pending({
      offset: currentPageNumber.selected * resolutionsOnPage,
      limit: resolutionsOnPage,
    }));
    setCurrentPage(currentPageNumber.selected + 1);
  };
  const fromItem = (currentPage - 1) * resolutionsOnPage + 1;
  const toItem = Math.min((currentPage - 1) * resolutionsOnPage + resolutionsOnPage, totalCount);

  return (
    <Paginate>
      <div>
        {`${dictionary.paginate.resultsText} ${fromItem}-${toItem} ${dictionary.paginate.resultsPronoun} ${totalCount}`}
      </div>
      <StyledPaginateContainer>
        <ReactPaginate
          nextLabel={<NextIcon />}
          onPageChange={handlePageClick}
          pageCount={pagesCount}
          previousLabel={<PrevIcon />}
        />
      </StyledPaginateContainer>
    </Paginate>
  );
};

export default ResolutionsPaginate;
