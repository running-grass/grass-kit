module.exports = {
  presets: [
    require("@grass-kit/tailwind"),
  ],
  content: [
    'src/**/*.{ts,html,vue,js,tsx,jsx}',
    './node_modules/@grass-kit/web-component/src/**/*.{ts,html,js}',
  ],
}
