export const colors = {
  rock_blue: '#a1abc9',
  blue_chalk: '#e4ebff',
  alabaster: '#f9faff',
  radical_red: '#ff2567',
  cornflower_blue: '#7297ff',
  white: '#ffffff',
  brink_pink: '#f6657f',
  greenish_teal: '#34c197',
  cloud: '#c4c4c4',
  link_water: {
    1: '#dce0ec',
    '024': 'rgba(218, 228, 255, 0.24)',
    '016': 'rgba(218, 228, 255, 0.16)',
    '032': 'rgba(218, 228, 255, 0.32)',
    '050': 'rgba(218, 228, 255, 0.50)',
  },
  warm_blue: '#476cd3',
  pastel_grey: '#cccccc',
  dark_jungle_green: '#202225',
  platinum:
    {
      '050': 'rgba(220, 224, 236, 0.5)',
    },
  lavender_pinocchio:
    {
      '030': 'rgba(236, 220, 222, 0.3)',
    },
  gravel:
    {
      '060': 'rgba(70, 72, 75, 0.6)',
    },
  black: {
    1: '#000000',
    '040': 'rgba(0, 0, 0, 0.4)',
  },
  transparent: 'transparent',
};

export const borders = {
  blue_border: `1px solid ${colors.rock_blue}`,
  transparent_border: '1px solid transparent',
  cornflower_border: `1px solid ${colors.cornflower_blue}`,
  blue_chalk_border: `3px solid ${colors.blue_chalk}`,
  link_water05_border: `1px solid ${colors.link_water['050']}`,
  link_water1_border: `1px solid ${colors.link_water['1']}`,
  platinum05_border: `1px solid ${colors.platinum['050']}`,
  radical_red_border: `1px solid ${colors.radical_red}`,
};

export const shadows = {
  link_water024_shadow: `0px 4px 32px ${colors.link_water['024']}`,
  link_water016_shadow: `0px 4px 32px ${colors.link_water['016']}`,
  link_water032_shadow: `0px 4px 32px ${colors.link_water['032']}`,
};
