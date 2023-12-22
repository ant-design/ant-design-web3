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
  ],
});
