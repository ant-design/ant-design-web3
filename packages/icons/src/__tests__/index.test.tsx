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
});
