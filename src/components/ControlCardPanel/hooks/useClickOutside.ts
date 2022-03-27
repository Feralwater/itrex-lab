import React, { useEffect } from 'react';

interface UseClickOutsideProps{
  elRef: React.MutableRefObject<HTMLDivElement> | undefined
  callback: ()=>void
}

export const UseClickOutside = ({ elRef, callback }:UseClickOutsideProps) => {
  useEffect(() => {
    const handleClickOutside = (event:Event) => {
      if (!elRef?.current?.contains(event.target as Element)) {
        callback();
      }
    };
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [callback, elRef]);
};
