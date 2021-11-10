import {StylesConfig} from "react-select";

type Option = {
    value: string
    label: string
}

export const SelectStyles: StylesConfig<Array<Option>> = {
    control: (styles) => ({
        ...styles,
        backgroundColor: '#ffffff',
        border: '1px solid #DCE0EC',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 32px rgba(218, 228, 255, 0.16)',
        borderRadius: '8px',
        padding: '16px 24px',
        // ":focus": {border: 'none'}
    }),
    option: (styles, {data, isDisabled, isFocused, isSelected}) => {
        return {
            ...styles,
            borderRadius: '8px',
            padding: '16px 24px',
            backgroundColor: isDisabled
                ? undefined
                : isSelected
                    ? '#f9faff'
                    : isFocused
                        ? '#f9faff'
                        : '#ffffff',
            color: isDisabled
                ? '#cccccc'
                : isSelected
                    ? '#202225'
                    : '#202225',
            cursor: isDisabled ? 'not-allowed' : 'default',
        };
    },
    indicatorSeparator: () => ({}),
    dropdownIndicator: () => ({
        color: '#A1ABC9'
    }),
    input: (styles) => ({
        ...styles,
    }),
    placeholder: (styles) => ({
        ...styles,
        fontSize: '17px',
        lineHeight: '24px',
        color: '#a1abc9',
    }),
};