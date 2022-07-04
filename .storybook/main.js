module.exports = {
  "stories": [
    '../stories/**/*.stories.mdx'
  ],
  refs: (config, { configType }) => {
    const isLocal = true // configType === 'DEVELOPMENT'
    return {
      react: {
        title: 'React',
        url: isLocal ? 'http://localhost:6003/' : 'https://0ccefd4--62bef79208281287d3cffdd0.chromatic.com/',
      },
    };
  },
  "addons": [
    "@storybook/addon-essentials",
  ],
  "features": {
    "storyStoreV7": true
  }
}