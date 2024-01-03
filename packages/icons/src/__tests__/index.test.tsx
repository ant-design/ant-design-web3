import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { getComponents } from './iconTest';

describe('Test Icons', () => {
  it('should render all icons', async () => {
    const comps = await getComponents('components');
    comps.forEach((Comp) => {
      const { container } = render(<Comp />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('icon path referenced id should start with `ant-web3-icon-`', async () => {
    const comps = await getComponents('components');

    const relIdRegex = /url\(#[a-zA-Z0-9-]+\)/g;

    comps.forEach((Comp) => {
      const { container } = render(<Comp />);

      const htmlText = container.innerHTML;

      // find all `url(#id)` in the html text
      const matches = htmlText.match(relIdRegex);

      matches?.forEach((match) => {
        expect(
          match,
          `${Comp.displayName} reference id: ${match} is not start with ant-web3-icon-`,
        ).toMatch(/^url\(#ant-web3-icon-/);
      });
    });
  });
});
