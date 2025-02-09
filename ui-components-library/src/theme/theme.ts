import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    neutral: {
      white: string;
      10: string;
      20: string;
      30: string;
      40: string;
      50: string;
      60: string;
      70: string;
      80: string;
      90: string;
      100: string;
    };
    purple: {
      10: string;    // color/purple/10
      20: string;    // color/purple/20
    };
    orange: {
      10: string;    // color/orange/10
      20: string;    // color/orange/20
    };
    green: {
      10: string;    // color/green/10
      20: string;    // color/green/20
    };
    yellow: {
      10: string;    // color/yellow/10
      20: string;    // color/yellow/20
    };
    brown: {
      10: string;    // color/brown/10
    };
    pink: {
      10: string;    // color/pink/10
      20: string;    // color/pink/20
    };
    blue: {
      10: string;
      20: string;
      30: string;
      40: string;
      50: string;
    };
    red: {
      10: string;
      20: string;
      30: string;
    };
  }
  interface PaletteOptions {
    neutral: {
      white: string;
      10: string;
      20: string;
      30: string;
      40: string;
      50: string;
      60: string;
      70: string;
      80: string;
      90: string;
      100: string;
    };
    purple?: {
      10: string;
      20: string;
    };
    orange?: {
      10: string;
      20: string;
    };
    green?: {
      10: string;
      20: string;
    };
    yellow?: {
      10: string;
      20: string;
    };
    brown?: {
      10: string;
    };
    pink?: {
      10: string;
      20: string;
    };
    blue?: {
      10: string;
      20: string;
      30: string;
      40: string;
      50: string;
    };
    red?: {
      10: string;
      20: string;
      30: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    neutral: {
      white: '#FFFFFF',
      10: '#FAFAFA',
      20: '#F5F5F5',
      30: '#EAEAEA',
      40: '#E4E4E4',
      50: '#BABABA',
      60: '#8C8C8C',
      70: '#4D4D4D',
      80: '#383838',
      90: '#2A2A2A',
      100: '#1C1C1C',
    },
    purple: {
      10: '#DFD3F9',
      20: '#6F30F6',
    },
    orange: {
      10: '#FBECE5',
      20: '#E07524',
    },
    green: {
      10: '#E6F7F1',
      20: '#32BA8A',
    },
    yellow: {
      10: '#FFFBEB',
      20: '#FFDB5C',
    },
    brown: {
      10: '#6B4F3B',
    },
    pink: {
      10: '#FFECFE',
      20: '#FF61F9',
    },
    blue: {
      10: '#F8FAFF',
      20: '#E4F3FE',
      30: '#CFE6FA',
      40: '#1E99F9',
      50: '#517CF5',
    },
    red: {
      10: '#FFEEEB',
      20: '#FF705C',
      30: '#E60000',
    },
  },
  typography: {
    fontFamily: [
      'Roboto Flex',
      'Roboto',
      'sans-serif'
    ].join(','),

    subtitle2: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
      letterSpacing: '0.24px',
    },

    overline: {
      fontSize: '9px',
      fontWeight: 500,
      textTransform: 'uppercase',
      lineHeight: '14px',
      letterSpacing: '0.36px',
    },

    caption: {
      fontSize: '11px',
      fontWeight: 500,
      lineHeight: '14px',
      letterSpacing: '0.11px',
    },

    button: {
      fontSize: '8px',
      fontWeight: 700,
      textTransform: 'uppercase',
      lineHeight: '8px',
      letterSpacing: '0.32px',
    },
  },
  spacing: (factor: number) => {
    const spacingValues = {
      1: 4,  // 4px - quarter spacing
      2: 6,  // 6px - for tight spacing like gaps
      3: 8,  // 8px - standard padding
      4: 12, // 12px
      5: 16, // 16px
      6: 20, // 20px - standard height for chips
      7: 24, // 24px
      8: 32, // 32px
      9: 40, // 40px
      10: 48, // 48px
      11: 56, // 56px
      12: 64, // 64px
      13: 80, // 80px
      14: 96, // 96px
      15: 120, // 120px
    }[factor] ?? (factor * 4);

    return `${spacingValues}px`;
  },
});
