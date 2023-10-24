import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  hash: true,

  // Where to look for your css declarations
  include: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
    tokens: {
      colors: {
        backgroundBody: { value: '#232931' },
        borderLight: { value: '#4f545a' },
        text: { value: '#bdbfc1' },
        textLink: { value: '#eeeeee' },
        textLinkDarker: { value: '#4ecca3' },
        textBrandHighlight: { value: '#4ecca3' },
      },
      fontSizes: {
        10: { value: '14px' },
        20: { value: '16px' },
        30: { value: '18px' },
        40: { value: '20px' },
        50: { value: '24px' },
        60: { value: '28px' },
        70: { value: '32px' },
        80: { value: '40px' },
        90: { value: '44px' },
        100: { value: '48px' },
        110: { value: '72px' },
      },
      fontWeights: {
        bold: { value: '700' },
        light: { value: '300' },
        medium: { value: '500' },
        normal: { value: '400' },
        semiBold: { value: '600' },
      },
      lineHeights: {
        0: { value: '0' },
        10: { value: '24px' },
        20: { value: '28px' },
        30: { value: '28px' },
        40: { value: '28px' },
        50: { value: '32px' },
        60: { value: '36px' },
        70: { value: '40px' },
        80: { value: '52px' },
        90: { value: '56px' },
        100: { value: '60px' },
        110: { value: '92px' },
      },
      radii: {
        circle: { value: '100%' },
      },
      spacing: {
        50: { value: '1rem' },
        60: { value: '1.25rem' },
        70: { value: '1.5rem' },
        120: { value: '2.75rem' },
        200: { value: '4.75rem' },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',

  globalCss: {
    '*': {
      boxSizing: 'border-box',
    },
    body: {
      backgroundColor: 'backgroundBody',
      margin: 0,
      padding: 0,
      fontSize: '18px',
      color: 'text',
    },
  },
});
