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
});
