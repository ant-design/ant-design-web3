import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TronWeb3ConfigProvider } from '../index';

describe('TronWeb3ConfigProvider basic cases', () => {
  it('mount correctly', () => {
    const App = () => (
      <TronWeb3ConfigProvider>
        <div className="content">test</div>
      </TronWeb3ConfigProvider>
    );

    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.content')?.textContent).toBe('test');
  });
});
