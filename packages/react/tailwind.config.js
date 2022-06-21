module.exports = {
  presets: [
    require("@grass-ui/tailwind"),
    require("@grass-ui/web-component/tailwind.config")
  ],
  content: [
    'src/**/*.{ts,html,vue,js,tsx,jsx}',
    './node_modules/grass-ui/web-component/src/**/*.{ts,html,js}',
  ],
}
