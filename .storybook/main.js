
module.exports = {
  // Your existing Storybook configuration

  // 👇 Retrieve the current environment from the configType argument
  refs: (config, { configType }) => {
    const isLocal = true // configType === 'DEVELOPMENT'
    return {
      react: {
        title: 'Composed React Storybook running in development mode',
        url: 'http://localhost:7007',
      },
      angular: {
        title: 'Composed Angular Storybook running in development mode',
        url: 'http://localhost:7008',
      },
    };
  },
};