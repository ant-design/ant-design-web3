import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { TokenSelect } from '..';
import { type Token } from '../..';

// Mock tokens
const mockTokens = [
  {
    symbol: 'ETH',
    name: 'Ethereum',
    icon: '🟢',
    decimal: 18,
    availableChains: [{ contract: '0x123' }],
  },
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    icon: '🟡',
    decimal: 18,
    availableChains: [{ contract: '0x456' }],
  },
] as Token[];

describe('TokenSelect component', () => {
  it('should render the component with placeholder text', () => {
    const { baseElement } = render(<TokenSelect tokenList={mockTokens} />);

    expect(baseElement.querySelector('.ant-select-selection-placeholder')?.textContent).toBe(
      'Please select token',
    );
  });

  it('should display the token list when clicked', () => {
    const { baseElement } = render(<TokenSelect tokenList={mockTokens} />);

    fireEvent.mouseDown(baseElement.querySelector('.ant-select-selector') as Element);

    const selectOptions = baseElement.querySelectorAll('.ant-select-item');

    expect(selectOptions.length).toBe(2);

    expect(selectOptions[0].textContent).toBe('🟢Ethereum');
    expect(selectOptions[1].textContent).toBe('🟡Bitcoin');
  });

  it('should call onChange with selected token', () => {
    const handleChange = vi.fn();

    const { baseElement } = render(<TokenSelect tokenList={mockTokens} onChange={handleChange} />);

    fireEvent.mouseDown(baseElement.querySelector('.ant-select-selector') as Element);

    const selectOptions = baseElement.querySelectorAll('.ant-select-item');

    fireEvent.click(selectOptions[0]);

    expect(handleChange).toHaveBeenCalledWith(mockTokens[0]);
  });

  it('should filter the token list based on input', () => {
    const { baseElement } = render(<TokenSelect showSearch tokenList={mockTokens} />);

    // filter by symbol
    fireEvent.change(baseElement.querySelector('.ant-select-selection-search-input')!, {
      target: { value: 'ETH' },
    });

    expect(baseElement.querySelectorAll('.ant-select-item').length).toBe(1);
    expect(baseElement.querySelector('.ant-select-item')?.textContent).toBe('🟢Ethereum');

    // filter by contract address
    fireEvent.change(baseElement.querySelector('.ant-select-selection-search-input')!, {
      target: { value: '0x123' },
    });

    expect(baseElement.querySelectorAll('.ant-select-item').length).toBe(1);
    expect(baseElement.querySelector('.ant-select-item')?.textContent).toBe('🟢Ethereum');

    // filter by name
    fireEvent.change(baseElement.querySelector('.ant-select-selection-search-input')!, {
      target: { value: 'Bitcoin' },
    });

    expect(baseElement.querySelectorAll('.ant-select-item').length).toBe(1);
    expect(baseElement.querySelector('.ant-select-item')?.textContent).toBe('🟡Bitcoin');
  });
});
