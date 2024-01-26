export const theme = {
  colors: {
    primary: 'rgb(43, 38, 178)',
    secondary: 'rgb(247, 38, 115)',
    warning: 'rgb(247, 38, 115)',
    success: 'rgb(172, 243, 157)',
    info: 'rgb(85, 193, 255)',
    deepWhite: 'rgb(255, 255, 255)',
    white: 'rgb(250, 250, 253)',
    gray0: 'rgb(245, 245, 253)',
    gray1: 'rgb(241, 241, 243)',
    gray2: 'rgb(221, 221, 223)',
    gray3: 'rgb(201, 201, 203)',
    gray4: 'rgb(181, 181, 184)',
    gray5: 'rgb(161, 161, 164)',
    gray6: 'rgb(141, 141, 144)',
    gray7: 'rgb(121, 121, 124)',
    gray8: 'rgb(101, 101, 104)',
    gray9: 'rgb(81, 81, 84)',
    gray10: 'rgb(61, 61, 64)',
    gray11: 'rgb(41, 41, 44)',
    gray12: 'rgb(21, 21, 24)',
    deepBlack: 'rgb(0, 0, 0)',
    mediumGray: '#DDDDDD',
    darkerGray: '#AAAAAA',
  },
  font: {
    family: {
      default: "'Open Sans', sans-serif",
      secondary: "'Montserrat', sans-serif",
    },
    sizes: {
      xxsmall: '1rem',
      xsmall: '1.2rem',
      small: '1.6rem',
      normal: '1.8rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
      xxhuge: '7.2rem',
      hero: '8.0rem',
      xhero: '8.8rem',
      xxhero: '9.6rem',
    },
  },
  media: {
    lteOrEqSmallest: '(max-width: 320px)',
    lteOrEqSmall: '(max-width: 576px)',
    lteOrEqMedium: '(max-width: 768px)',
    lteOrEqLarge: '(max-width: 992px)',
    gteOrEqSmallest: '(min-width: 320px)',
    gteOrEqSmall: '(min-width: 576px)',
    gteOrEqMedium: '(min-width: 768px)',
    gteOrEqLarge: '(min-width: 992px)',
  },
  spacings: {
    xxtiny: '0.1rem',
    xtiny: '0.2rem',
    tiny: '0.4rem',
    xxsmall: '0.8rem',
    xsmall: '1.2rem',
    small: '1.6rem',
    mediumSmall: '2.0rem',
    medium: '2.4rem',
    mediumLarge: '2.8rem',
    large: '3.2rem',
    xlarge: '3.6rem',
    xxlarge: '4.0rem',
    huge: '4.4rem',
    xhuge: '4.8rem',
    xxhuge: '5.6rem',
    hero: '6.4rem',
    xhero: '7.2rem',
    xxhero: '8.0rem',
  },
  frameSizes: {
    xxsmall: '8rem',
    xsmall: '12rem',
    small: '24rem',
    smallMedium: '32rem',
    medium: '40rem',
    largeMedium: '56rem',
    large: '64rem',
    xlarge: '80rem',
    xxlarge: '104rem',
    max: '120rem',
  },
  transitions: {
    fastest: 'all 100ms ease-in-out',
    faster: 'all 200ms ease-in-out',
    fast: 'all 300ms ease-in-out',
    normal: 'all 500ms ease-in-out',
    slow: 'all 600ms ease-in-out',
    slower: 'all 800ms ease-in-out',
    slowest: 'all 1s ease-in-out',
  },
  layers: {
    normal: 0,
    layer1: 1,
    layer2: 2,
    layer3: 3,
    layer4: 4,
    layer5: 5,
    layer6: 6,
    layer7: 7,
    layer8: 8,
    layer9: 9,
    aboveAll: 10,
  },
  firstItem: false,
} as const;
