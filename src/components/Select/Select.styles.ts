import {StylesConfig} from "react-select";
import {Options} from "./Select.types";
import {colors} from "../../styles/colors";

export const SelectStyles: StylesConfig<Array<Options>> = {
    control: (styles) => ({
        ...styles,
        backgroundColor: `${colors.white}`,
        border: `1px solid ${colors.link_water}`,
        boxSizing: 'border-box',
        boxShadow: `0px 4px 32px ${colors.link_water_alfa016}`,
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
                    ? `${colors.alabaster}`
                    : isFocused
                        ? `${colors.alabaster}`
                        : `${colors.white}`,
            color: isDisabled
                ? `${colors.pastel_grey}`
                : isSelected
                    ? `${colors.dark_jungle_green}`
                    : `${colors.dark_jungle_green}`,
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
            ? `${colors.cornflower_blue}`
            : `${colors.rock_blue}`,
        transition: "all .3s ease-out",
    }),
    input: (styles) => ({
        ...styles,
    }),
    placeholder: (styles) => ({
        ...styles,
        fontSize: '17px',
        lineHeight: '24px',
        color: `${colors.rock_blue}`,
    }),
};
