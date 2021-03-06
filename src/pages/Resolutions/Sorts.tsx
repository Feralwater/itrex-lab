import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { CustomSelect, InputSearchContainer } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { occupationsSlice, selectOccupations } from 'redux/reducers';
import { dictionary } from 'pages/dictionary/pagesDictionary';
import { Options } from 'components/Select/Select.types';
import { SortsWrapper } from './Sorts.styles';

interface SortsProps{
  setSearchTerm?: Dispatch<SetStateAction<string>>;
  setSpecialisationID?: Dispatch<SetStateAction<string>>;
}

export const Sorts:React.VFC<SortsProps> = ({ setSearchTerm, setSpecialisationID }) => {
  const { occupations: specializations } = useAppSelector(selectOccupations);
  const optionsForOccupationsSelect = specializations.map((specialization) => ({
    label: specialization.occupationName,
    value: specialization.occupationID,
  }));
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(occupationsSlice.actions.pending());
  }, [dispatch]);
  const onChangeHandler = (value: Options) => {
    if (setSpecialisationID) {
      setSpecialisationID(value.value);
    }
  };
  return (
    <SortsWrapper>
      <InputSearchContainer
        label=""
        type="text"
        inputSize="large"
        placeholder="Search"
        id="resolutionSearch"
        icon="left"
        iconURL="/svg/search-icon.svg"
        isRequire={false}
        setSearchTerm={setSearchTerm}
      />
      <CustomSelect
        id="specializations"
        options={optionsForOccupationsSelect}
        placeholder={dictionary.patientPage.resolutionsFilterPlaceholder}
        onChangeHandler={onChangeHandler}
        isRequire={false}
      />
    </SortsWrapper>
  );
};
