import React, { useState } from 'react';
import { ETH, USDT } from '@ant-design/web3-assets/tokens';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import type { TokenSelectProps } from '..';
import { TokenSelect } from '..';

// Mock tokens
const mockTokens = [ETH, USDT];

describe('TokenSelect component', () => {
  it('should render the component with placeholder text', () => {
    const { baseElement } = render(<TokenSelect options={mockTokens} />);

    expect(baseElement.querySelector('.ant-select-selection-placeholder')?.textContent).toBe(
      'Please select token',
    );
  });

  it('should display the token list when clicked', () => {
    const { baseElement } = render(<TokenSelect options={mockTokens} />);

    fireEvent.mouseDown(baseElement.querySelector('.ant-select-selector') as Element);

    const selectOptions = baseElement.querySelectorAll('.ant-select-item');

    expect(selectOptions.length).toBe(2);

    expect(selectOptions[0].textContent).includes('Ethereum');
    expect(selectOptions[1].textContent).includes('Tether USD');
  });

  it('should display correct token list when use options property', () => {
    const { baseElement } = render(<TokenSelect options={mockTokens} />);

    fireEvent.mouseDown(baseElement.querySelector('.ant-select-selector') as Element);

    const selectOptions = baseElement.querySelectorAll('.ant-select-item');

    expect(selectOptions.length).toBe(2);

    expect(selectOptions[0].textContent).includes('Ethereum');
    expect(selectOptions[1].textContent).includes('Tether USD');
  });

  it('should call onChange with selected token', () => {
    const handleChange = vi.fn();

    const { baseElement } = render(<TokenSelect options={mockTokens} onChange={handleChange} />);

    fireEvent.mouseDown(baseElement.querySelector('.ant-select-selector') as Element);

    const selectOptions = baseElement.querySelectorAll('.ant-select-item');

    fireEvent.click(selectOptions[0]);

    expect(handleChange).toHaveBeenCalledWith(mockTokens[0]);
  });

  it('should filter the token list based on input', () => {
    const { baseElement } = render(<TokenSelect showSearch options={mockTokens} />);

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

  it('when not exist match token, show token symbol', () => {
    const { baseElement } = render(
      <TokenSelect showSearch value={{ ...USDT, symbol: 'Solana' }} options={mockTokens} />,
    );

    fireEvent.mouseDown(baseElement.querySelector('.ant-select-selector') as Element);

    expect(baseElement.querySelector('.ant-select-selection-item')?.textContent).toBe('Solana');

    expect(baseElement.querySelectorAll('.ant-select-item').length).toBe(2);
    expect(baseElement.querySelectorAll('.ant-select-item-option-selected').length).toBe(0);
  });

  it('support multiple mode', () => {
    const TestComponent = (props: TokenSelectProps) => {
      const [tokenList, setTokenList] = useState<TokenSelectProps['value']>();

      return (
        <TokenSelect
          mode="multiple"
          options={mockTokens}
          value={tokenList}
          onChange={(newTokenList) => {
            setTokenList(newTokenList);

            props.onChange?.(newTokenList);
          }}
        />
      );
    };

    const handleChange = vi.fn();

    const { baseElement } = render(<TestComponent onChange={handleChange} />);

    fireEvent.mouseDown(baseElement.querySelector('.ant-select-selector') as Element);

    const selectOptions = baseElement.querySelectorAll('.ant-select-item');

    fireEvent.click(selectOptions[0]);
    fireEvent.click(selectOptions[1]);

    expect(handleChange).toHaveBeenCalledWith(mockTokens);

    expect(baseElement.querySelectorAll('.ant-select-selection-item').length).toBe(2);
    expect(baseElement.querySelectorAll('.ant-select-selection-overflow-item').length).toBe(3);

    expect(
      baseElement.querySelectorAll('.ant-select-selector .ant-web3-token-select-token-icon').length,
    ).toBe(2);
    expect(
      baseElement.querySelectorAll('.ant-select-selector .ant-web3-token-select-token-name').length,
    ).toBe(0);
  });
});
