module.exports = {
  presets: [
    require("@x-style/tailwind"),
    require("@x-style/web-component/tailwind.config")
  ],
  content: [
    'src/**/*.{ts,html,vue,js,tsx,jsx}',
    './node_modules/@x-style/web-component/src/**/*.{ts,html,js}',
  ],
}
