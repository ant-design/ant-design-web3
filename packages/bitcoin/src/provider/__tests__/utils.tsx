/* v8 ignore start */
import type { FC } from 'react';
import { render } from '@testing-library/react';

type RenderResult = ReturnType<typeof render>;
type RenderWithUtils = RenderResult & {
  selector: <T extends Element = Element>(selector: string) => T | null;
  selectors: <T extends Element = Element>(selector: string) => NodeListOf<T>;
};
type XRender = (Comp: FC, options?: Parameters<typeof render>[1]) => RenderWithUtils;

export const xrender: XRender = (Comp, options) => {
  const { baseElement, ...others } = render(<Comp />, options);
  return {
    baseElement,
    ...others,
    selector: (selector) => baseElement.querySelector(selector),
    selectors: (selector) => baseElement.querySelectorAll(selector),
  };
};
