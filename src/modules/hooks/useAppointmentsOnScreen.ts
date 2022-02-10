import {
  Dispatch, SetStateAction, useEffect, useRef,
} from 'react';
import { FETCH_STATUS } from 'redux/reducers/constants';

interface AppointmentRef {
  responseStatus: 'idle' | 'loading' | 'failed' | 'fulfilled',
  isMoreAppointments: boolean,
  setPageNumber: Dispatch<SetStateAction<number>>,
}

export const useAppointmentsOnScreen = ({ responseStatus, setPageNumber, isMoreAppointments }:AppointmentRef) => {
  const hiddenBlockRef = useRef();
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      const shouldFetch = entry.isIntersecting && isMoreAppointments && responseStatus === FETCH_STATUS.FULFILLED;
      if (shouldFetch) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    }, options);

    if (hiddenBlockRef.current) {
      observer.observe(hiddenBlockRef.current);
    }
    return () => {
      if (hiddenBlockRef.current) {
        observer.unobserve(hiddenBlockRef.current);
      }
    };
  }, [hiddenBlockRef, options]);
  return { hiddenBlockRef };
};
