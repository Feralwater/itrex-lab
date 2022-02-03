import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './redux/store';
import { profileSlice, selectProfile } from './redux/reducers';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useProfile = () => {
  const dispatch = useAppDispatch();
  const initProfile = () => dispatch(profileSlice.actions.pending());

  return { initProfile, roleName: useAppSelector(selectProfile).roleName };
};
