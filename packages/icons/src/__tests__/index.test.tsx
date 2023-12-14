import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { resolve } from 'path';
import fs from 'fs';
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
