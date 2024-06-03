import React from 'react';
import { ETH, USDT } from '@ant-design/web3-assets/tokens';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { TokenSelect } from '..';

// Mock tokens
const mockTokens = [ETH, USDT];

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

    expect(selectOptions[0].textContent).includes('Ethereum');
    expect(selectOptions[1].textContent).includes('Tether USD');
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
      target: { value: 'Ethere' },
    });

    expect(baseElement.querySelectorAll('.ant-select-item').length).toBe(1);
    expect(baseElement.querySelector('.ant-select-item')?.textContent).include('Ethereum');

    // filter by contract address
    fireEvent.change(baseElement.querySelector('.ant-select-selection-search-input')!, {
      target: { value: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8' },
    });

    expect(baseElement.querySelectorAll('.ant-select-item').length).toBe(1);
    expect(baseElement.querySelector('.ant-select-item')?.textContent).includes('Ethereum');

    // filter by name
    fireEvent.change(baseElement.querySelector('.ant-select-selection-search-input')!, {
      target: { value: 'Tether USD' },
    });

    expect(baseElement.querySelectorAll('.ant-select-item').length).toBe(1);
    expect(baseElement.querySelector('.ant-select-item')?.textContent).includes('Tether USD');
  });
});
