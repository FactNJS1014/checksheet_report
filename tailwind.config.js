/** @type {import('tailwindcss').Config} */

const { addDynamicIconSelectors } = require("@iconify/tailwind")
import flyonui from 'flyonui';
import PrimeUI from 'tailwindcss-primeui';

module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/***/**/*.vue",
    '../path/to/datatables.net/js/dataTables.min.js',
  ],
  theme: {
    extend: {},
  },
  flyonui:{
    vendors: true,
  },
  plugins: [
    require("flyonui"),
    require("flyonui/plugin"),
    addDynamicIconSelectors(),
    PrimeUI
  ],
}

