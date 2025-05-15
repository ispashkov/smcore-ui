const { getThemeVariables } = require('antd/dist/theme')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/preset-create-react-app',
      options: {
        craOverrides: {
          fileLoaderExcludes: ['less'],
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              modifyVars: getThemeVariables({
                dark: true,
              }),
              javascriptEnabled: true,
            },
          },
        },
      ],
    })

    return {
      ...config,
      plugins: config.plugins.filter(plugin => plugin.constructor.name !== 'ESLintWebpackPlugin'),
    }
  },
}
