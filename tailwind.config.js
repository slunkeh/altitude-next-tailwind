module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "xs": "340px",
      },
      colors: {
        "dark": "#102028",
        "dark-100": "#edf4f8",
        "dark-200": "#c8dee9",
        "dark-300": "#102028",
        "dark-400": "#80b2cc",
        "dark-500": "#5b9dbd",
        "dark-600": "#4283a4",
        "dark-700": "#33667f",
        "dark-800": "#24495b",
        "dark-900": "#162c37",
        "primary": "#48c084",
        "primary-100": "#ecf8f2",
        "primary-200": "#c6ebd9",
        "primary-300": "#a0debf",
        "primary-400": "#7ad1a6",
        "primary-500": "#54c48c",
        "primary-600": "#3bab73",
        "primary-700": "#2e8559",
        "primary-800": "#215f40",
        "primary-900": "#215f40",
        "lilac": "#ad5fce",
        "sundown": "#f7b3aa",
        "slate-blue": "#6c5ece",
        "slate-blue-900": "#080614",
        "slate-blue-800": "#17123b",
        "slate-blue-700": "#261e62",
        "slate-blue-600": "#362a89",
        "slate-blue-500": "#5e4fc9",
        "slate-blue-400": "#8276d5",
        "slate-blue-300": "#a69de1",
        "slate-blue-200": "#c9c4ed",
        "slate-blue-100": "#edebf9",
      },
      fontFamily: {
        body: ["Inter"]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
