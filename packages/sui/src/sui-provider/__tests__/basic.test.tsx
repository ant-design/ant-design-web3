import React from 'react';
import { describe, expect, it } from 'vitest';

import { SuiWeb3ConfigProvider } from '../index';
import { xrender } from './utils';

describe('SuiWeb3ConfigProvider basic tests', () => {
  it('mount correctly', () => {
    const App = () => (
      <SuiWeb3ConfigProvider>
        <div className="content">test</div>
      </SuiWeb3ConfigProvider>
    );

    const { selector } = xrender(App);
    expect(selector('.content')?.textContent).toBe('test');
  });
});
