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
                  removeViewBox: false,
                },
              },
            },
            'removeDimensions',
            'convertStyleToAttrs',
          ],
        },
      },
    ],
    'react-inline-svg-unique-id',
  ],
});
