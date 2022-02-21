import React, { useCallback, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { resolutionsOnPage } from './constants';
import { ReactComponent as NextIcon } from '../../assets/svg/rightArrowGrey-icon.svg';
import { ReactComponent as PrevIcon } from '../../assets/svg/leftArrowGrey-icon.svg';
import { Paginate, StyledPaginateContainer } from './ResolutionsPaginate.styles';
import { dictionary } from '../dictionary/pagesDictionary';
import { ResolutionsPaginateProps } from './Resolutions.types';

export const ResolutionsPaginate: React.VFC<ResolutionsPaginateProps> = ({ totalCount, handleClick }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pagesCount = Math.ceil(totalCount / resolutionsOnPage);
  const fromItem = (currentPage - 1) * resolutionsOnPage + 1;
  const toItem = Math.min((currentPage - 1) * resolutionsOnPage + resolutionsOnPage, totalCount);
  const handlePageClick = useCallback((currentPageNumber: { selected: number }) => {
    handleClick(currentPageNumber);
    setCurrentPage(currentPageNumber.selected + 1);
  }, []);
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
