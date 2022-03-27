import React, { useEffect } from 'react';

interface UseClickOutsideProps{
  elRef: React.MutableRefObject<HTMLDivElement> | undefined
  callback: (event:Event)=>void
}

export const UseClickOutside = ({ elRef, callback }:UseClickOutsideProps) => {
  useEffect(() => {
    const handleClickOutside = (event:Event) => {
      if (elRef?.current?.contains(event.target as Element) && callback) {
        callback(event);
      }
    };
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [callback, elRef]);
};
