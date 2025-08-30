export const designTokens = {
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
  },
  
  colors: {
    primary: {
      50: '#f3e8ff',
      100: '#e9d5ff',
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      900: '#4c1d95',
    },
    secondary: {
      50: '#ecfeff',
      100: '#cffafe',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      900: '#164e63',
    },
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617',
    }
  },
  
  typography: {
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    lineHeights: {
      body: '1.5',
      heading: '1.2',
      tight: '1.25',
    }
  },
  
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
  }
} as const;