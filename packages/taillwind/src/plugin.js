const plugin  = require('tailwindcss/plugin')

const Button = require("./component/button")
const Switch = require("./component/switch")

module.exports = plugin.withOptions(() => {
  return function ({ addComponents }) {
    addComponents(Button())
    addComponents(Switch())
  }
})