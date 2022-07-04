module.exports = {
  "stories": [
    '../stories/**/*.stories.ts',
    '../stories/**/*.stories.mdx'
  ],
  refs: (config, { configType }) => {
    const isLocal = configType === 'DEVELOPMENT'
    return {
      '@grass-kit/tailwind': {
        title: 'Tailwind CSS',
        url: isLocal ? 'http://localhost:6001/' : 'https://master--62bef905f22a851af4cb79df.chromatic.com/',
      },
      '@grass-kit/web-component': {
        title: 'Web component (Lit)',
        url: isLocal ? 'http://localhost:6002/' : 'https://master--62bef9878f0b61a43bf8e1e9.chromatic.com/',
      },
      '@grass-kit/react': {
        title: 'React',
        url: isLocal ? 'http://localhost:6003/' : 'https://master--62bef79208281287d3cffdd0.chromatic.com/',
      },
      '@grass-kit/vue': {
        title: 'Vue',
        url: isLocal ? 'http://localhost:6004/' : 'https://master--62bef933024c1537d9d6b88a.chromatic.com/',
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