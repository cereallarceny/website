const font =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
const lightGray = '#ccc';
const mediumGray = '#999';
const darkGray = '#666';

export default {
  colors: {
    lightGray,
    mediumGray,
    darkGray
  },
  lineHeights: {
    normal: '1.75rem',
    tall: '2rem'
  },
  buttons: {
    learnMore: {
      position: 'relative',
      cursor: 'pointer',
      padding: '0px',
      backgroundColor: 'transparent',
      zIndex: 1,
      '&:focus': { outline: 'none' },
      '&:before': {
        borderTop: `1px solid ${lightGray}`,
        content: '""',
        margin: '0 auto',
        position: 'absolute',
        top: '50%',
        left: '0',
        right: '0',
        bottom: '0',
        width: '100%',
        zIndex: -1
      },
      '& > span': {
        background: 'white',
        padding: '0px 10px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: mediumGray
      }
    }
  },
  Box: {
    fontFamily: font
  },
  Link: {
    textDecoration: 'none',
    transition: 'color 0.25s ease-in-out',
    color: lightGray,
    '&:hover': { color: mediumGray }
  }
};
