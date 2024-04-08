import { defineConfig } from 'umi';

export default defineConfig({
  routes: [{ path: '/', component: 'index' }],
  npmClient: 'pnpm',
  chainWebpack(config) {
    // See: https://github.com/webpack/webpack/issues/11467
    config.module.rule('mjs-rule').resolve.set('fullySpecified', false);
  },
  mfsu: false, // make link work
});
