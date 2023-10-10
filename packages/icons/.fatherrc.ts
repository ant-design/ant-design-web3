import { defineConfig } from 'father';

export default defineConfig({
  extends: '../../.fatherrc.base.ts',
  extraBabelPlugins: ['inline-react-svg'],
});
