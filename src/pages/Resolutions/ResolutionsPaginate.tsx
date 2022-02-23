import React from 'react';
import ReactPaginate from 'react-paginate';
import { ResolutionsPaginateProps } from 'pages/Resolutions/Resolutions.types';
import { ReactComponent as NextIcon } from '../../assets/svg/rightArrowGrey-icon.svg';
import { ReactComponent as PrevIcon } from '../../assets/svg/leftArrowGrey-icon.svg';
import { Paginate, StyledPaginateContainer } from './ResolutionsPaginate.styles';
import { dictionary } from '../dictionary/pagesDictionary';

export const ResolutionsPaginate: React.VFC<ResolutionsPaginateProps> = ({
  fromItem,
  toItem,
  totalResolutionsCount,
  handleClick,
  pagesCount,
  currentPageNumber,
}) => (
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
