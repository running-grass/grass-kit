const plugin  = require('tailwindcss/plugin')

const Button = require("./component/button.js")

module.exports = plugin.withOptions(() => {
  return function ({ addComponents }) {
    addComponents(Button())
  }
})