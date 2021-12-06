import Highlighter from 'react-highlight-words';
import React from 'react';
import { InputValueType, LabelType } from './Select.types';
import colors from '../../styles/colors';

function searchOptionHelper({ label }:LabelType, { inputValue }:InputValueType) {
  return (
    <Highlighter
      highlightStyle={{
        fontWeight: 'bold',
        backgroundColor: `${colors.transparent}`,
      }}
      searchWords={[inputValue]}
      textToHighlight={label}
    />
  );
}

export default searchOptionHelper;
