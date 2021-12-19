import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './redux/store';
import { profile } from './redux/actions';
import { ROLES } from './routes/constants';
import { selectProfile } from './redux/reducers';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useProfile = () => {
  const dispatch = useAppDispatch();

  const initProfile = () => dispatch(profile.pending({
    first_name: '',
    id: '',
    last_name: '',
    photo: '',
    role_name: ROLES.PUBLIC,
  }));

  return {
    initProfile,
    roleName: useAppSelector(selectProfile).roleName,
  };
};
