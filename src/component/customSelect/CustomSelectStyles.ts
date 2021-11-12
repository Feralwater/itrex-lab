import {StylesConfig} from "react-select";

export type Option = {
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
        // ":focus": {
        //     ...styles[':focus'],
        //     border: 'none'
        // }
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
    dropdownIndicator: (base, state) => ({
        ...base,
        transform: state.selectProps.menuIsOpen
            ? 'rotate(180deg)'
            : undefined,
        color: state.selectProps.menuIsOpen
            ? '#7297ff'
            : '#a1abc9',
        transition: "all .3s ease-out",
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
