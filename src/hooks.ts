import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './redux/store';
import { profileSlice, selectProfile } from './redux/reducers';
import { editProfileSlice } from './redux/reducers/editProfile.reducer';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useProfile = () => {
  const dispatch = useAppDispatch();
  const initProfile = () => dispatch(profileSlice.actions.pending());
  const initEditProfile = () => {
    const data = {
      firstName: '',
      lastName: '',
      photo: '',
    };
    return dispatch(editProfileSlice.actions.pending(data));
  };

  return { initEditProfile, initProfile, roleName: useAppSelector(selectProfile).roleName };
};
