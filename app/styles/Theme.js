const colors = {
  transparent: 'transparent',
  dark: '#222222',
  headline: '#9b4800',
  white: '#ffffff'
};

const fontSizes = {
  xtraSmall: '9px',
  small: '10px',
  medium: '13px',
  large: '16px',
  xtraLarge: '18px'
};

const Theme = {
  ...colors,
  ...fontSizes,
  menu: {
    border: '#CB6206'
  },
  home: {
    background: '#1b55de'
  }
};

export default Theme;
