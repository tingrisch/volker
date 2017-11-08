const colors = {
  transparent: 'transparent',
  dark: '#222222',
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
  }
};

export default Theme;
