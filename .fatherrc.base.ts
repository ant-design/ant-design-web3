import { defineConfig } from 'father';

export default defineConfig({
  umd: undefined,
  cjs: {
    output: 'dist/lib',
    transformer: 'babel',
  },
  esm: {
    output: 'dist/esm',
    transformer: 'babel',
  },
  extraBabelPlugins: [
    [
      'inline-react-svg',
      {
        svgo: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  cleanupIDs: {
                    // Don't minify ids in `svg` to avoid conflict.
                    preservePrefixes: ['ant-web3-icon-'],
                  },
                },
              },
            },
          ],
        },
      },
    ],
    // Auto add .js extension for import in node environment when use with NextJS and Remix.
    'babel-plugin-add-import-extension',
  ],
});
