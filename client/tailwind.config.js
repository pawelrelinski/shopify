const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['label-checked'],
      borderColor: ['label-checked'],
      border: ['label-checked'],
    },
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['hover', 'focus'],
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    plugin(({ addVariant, e }) => {
      addVariant('label-checked', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          const eClassName = e(`label-checked${separator}${className}`);
          const yourSelector = 'input[type="radio"]';
          return `${yourSelector}:checked ~ .${eClassName}`;
        });
      });
    }),
  ],
};
