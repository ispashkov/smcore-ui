const CracoLessPlugin = require('craco-less')
const { getThemeVariables } = require('antd/dist/theme')

module.exports = {
  webpack: {
    configure: {
      ignoreWarnings: [/Failed to parse source map/],
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          sourceMap: true,
          lessOptions: {
            modifyVars: getThemeVariables({
              dark: true,
            }),
            javascriptEnabled: true,
            relativeUrls: false,
          },
        },
      },
    },
  ],
}
