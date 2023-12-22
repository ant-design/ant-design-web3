import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
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

    comps.forEach((Comp) => {
      const { container } = render(<Comp />);

      const pathWithFill = container.querySelectorAll<SVGPathElement>('path[fill^="url(#"]');

      // The `id` referenced by the `fill` attr of the `path` element
      // must start with `ant-web3-icon-`
      pathWithFill.forEach((path) => {
        expect(path.getAttribute('fill')).toMatch(/^url\(#ant-web3-icon-/);
      });
    });
  });
});
