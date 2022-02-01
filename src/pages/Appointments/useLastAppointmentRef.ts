import {
  Dispatch, SetStateAction, useCallback, useRef,
} from 'react';
import { FETCH_STATUS } from '../../redux/reducers/constants';

interface AppointmentRef {
  responseStatus: 'idle' | 'loading' | 'failed' | 'fulfilled',
  isMoreAppointments: boolean,
  setPageNumber: Dispatch<SetStateAction<number>>,
}

export const useAppointmentRef = ({ responseStatus, isMoreAppointments, setPageNumber }:AppointmentRef) => {
  const observer = useRef<IntersectionObserver>();
  const lastAppointmentRef = useCallback((node) => {
    if (responseStatus === FETCH_STATUS.LOADING) return;
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && isMoreAppointments) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [responseStatus, isMoreAppointments]);
  return { lastAppointmentRef };
};
