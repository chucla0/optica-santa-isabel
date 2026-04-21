import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F2F0EC',
        cyan: '#4EDCDF',
        'cyan-deep': '#0891B2',
        'cyan-soft': '#A7EEEF',
        charcoal: '#1A1A1A'
      },
      transitionDuration: {
        500: '500ms'
      }
    }
  },
  plugins: []
};

export default config;