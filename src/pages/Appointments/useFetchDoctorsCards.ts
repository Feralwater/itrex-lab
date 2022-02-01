import { useEffect } from 'react';
import { cardsForDoctor } from '../../redux/actions';
import { appointmentsPerPage } from './constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectCardsForDoctor, selectProfile } from '../../redux/reducers';

export const useFetchDoctorsCards = (page: number) => {
  const dispatch = useAppDispatch();
  const { id: userId } = useAppSelector(selectProfile);
  const { cards: appointments, status: responseStatus, isMore: isMoreAppointments } = useAppSelector(selectCardsForDoctor);
  useEffect(() => {
    if (userId) {
      dispatch(cardsForDoctor.pending({
        offset: (page - 1) * appointmentsPerPage,
        limit: appointmentsPerPage,
      }));
    }
  }, [userId, dispatch, page]);

  return { responseStatus, appointments, isMoreAppointments };
};
