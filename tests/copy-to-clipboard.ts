// mock copy-to-clipboard global, for test copy, config this file invitest.config.mts alias field
// @ts-ignore
global.copiedText = '__initial__copied__text__';

export default (text: string) => {
  // @ts-ignore
  global.copiedText = text;
};
