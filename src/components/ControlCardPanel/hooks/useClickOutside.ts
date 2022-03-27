import React, { useEffect } from 'react';

interface UseClickOutsideProps{
  elRef: React.MutableRefObject<HTMLDivElement> | undefined
  callback: ()=>void
}

export const UseClickOutside = ({ elRef, callback }:UseClickOutsideProps) => {
  useEffect(() => {
    const handleClickOutside = (event:Event) => {
      if (!elRef?.current?.contains(event.target as Element) && callback) {
        callback();
      }
    };
    document.addEventListener('click', handleClickOutside, false);

    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, [callback, elRef]);
};
