/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  safelist: [
    'hidden',
    'bg-blue-500',
    'bg-secondary-500',
    'text-white',
    {
      pattern: /bg-status-(backlog|open|todo|in_progress|in_review|in_testing|blocked|resolved|done|closed)/,
    },
    {
      pattern: /text-status-text-(backlog|open|todo|in_progress|in_review|in_testing|blocked|resolved|done|closed)/,
    },
     {
      pattern: /w-*/,
    }
  ],
  theme: {
    extend: {
      colors: {
        'tw-primary': {
          50:  '#ECEFFF',
          100: '#C5CBFF',
          200: '#9FA8FF',
          300: '#7985FF',
          400: '#5A6DFF',
          500: '#304FFE',
          600: '#3D54E6',
          700: '#2F42B3',
          800: '#223080',
          900: '#161E4D',
          950: '#0C1126',
          DEFAULT: '#536DFE',      // alias chính
          contrast: '#ffffff'      // màu text tương phản
        },
        'tw-secondary':{
          50:  '#fcfcfd',
          100: '#f9f9fb',
          200: '#f4f4f7',
          300: '#eeeeF2',
          400: '#e6e6ec',
          500: '#f0f0f4', 
          600: '#d9d9df',
          700: '#b8b8c1',
          800: '#8f8f97',
          900: '#6b6b72'
        },
        status: {
          backlog: '#94A3B8',
          open: '#70CBF5',
          todo:'#FACC15',
          'in_progress': '#094FC3',
          'in_review': '#7308E3',
          'in_testing': '#AB1259',
          blocked: '#E50B30',
          resolved: '#4DEFBE',
          done: '#27DD6A',
          closed: '#555962'
        },
        'status-text': {
          backlog: '#000000',
          open: '#141414',
          todo:'#000000',
          'in_progress': '#FFFFFF',
          'in_review': '#FFFFFF',
          'in_testing': '#FFFFFF',
          blocked: '#FFFFFF',
          resolved: '#000000',
          done: '#000000',
          closed: '#FFFFFF'
        }
      }
    },
  },
  plugins: [],
}