import React, { useState } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import type { CryptoInputProps } from '..';
import { CryptoInput } from '..';
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

describe('CryptoInput component', () => {
  it('should render the component with placeholder text', () => {
    const { baseElement } = render(<CryptoInput tokenList={mockTokens} />);

    expect(baseElement.querySelector('.ant-input-number-input')?.getAttribute('placeholder')).toBe(
      'Please enter amount',
    );
  });

  it('should display correct header', () => {
    // no header
    const { baseElement, rerender } = render(<CryptoInput tokenList={mockTokens} />);

    expect(baseElement.querySelectorAll('.ant-space-item').length).toBe(2);

    // custom header
    rerender(
      <CryptoInput
        tokenList={mockTokens}
        header={() => <div className="custom-header">Custom header</div>}
      />,
    );

    expect(baseElement.querySelectorAll('.ant-space-item').length).toBe(3);
    expect(baseElement.querySelector('.custom-header')).not.toBeNull();
    expect(baseElement.querySelector('.custom-header')?.textContent).toBe('Custom header');
  });

  it('should display correct footer', () => {
    // close footer
    const { baseElement, rerender } = render(<CryptoInput tokenList={mockTokens} footer={false} />);

    expect(baseElement.querySelectorAll('.ant-space-item').length).toBe(1);

    // custom footer
    rerender(
      <CryptoInput
        tokenList={mockTokens}
        footer={() => <div className="custom-footer">Custom footer</div>}
      />,
    );

    expect(baseElement.querySelector('.custom-footer')).not.toBeNull();
    expect(baseElement.querySelector('.custom-footer')?.textContent).toBe('Custom footer');

    // default footer
    rerender(<CryptoInput tokenList={mockTokens} />);

    expect(baseElement.querySelector('.web3-crypto-input-footer')).not.toBeNull();
  });

  it('should display the token list when clicked', () => {
    const { baseElement } = render(<CryptoInput tokenList={mockTokens} />);

    fireEvent.mouseDown(baseElement.querySelector('.ant-select-selector') as Element);

    const selectOptions = baseElement.querySelectorAll('.ant-select-item');

    expect(selectOptions.length).toBe(2);

    expect(selectOptions[0].textContent).toBe('🟢Ethereum');
    expect(selectOptions[1].textContent).toBe('🟡Bitcoin');
  });

  it('should call onChange with selected token and amount input', () => {
    const TestComponent = (props: CryptoInputProps) => {
      const [crypto, setCrypto] = useState<CryptoInputProps['value']>();

      return (
        <CryptoInput
          tokenList={mockTokens}
          value={crypto}
          onChange={(newCrypto) => {
            setCrypto(newCrypto);

            props.onChange?.(newCrypto);
          }}
        />
      );
    };

    const handleChange = vi.fn();

    const { baseElement } = render(<TestComponent onChange={handleChange} />);

    fireEvent.mouseDown(baseElement.querySelector('.ant-select-selector') as Element);

    const selectOptions = baseElement.querySelectorAll('.ant-select-item');

    fireEvent.click(selectOptions[0]);

    expect(handleChange).toHaveBeenCalledWith({ token: mockTokens[0] });

    fireEvent.change(baseElement.querySelector('.ant-input-number-input') as Element, {
      target: { value: '10' },
    });

    expect(handleChange).toHaveBeenCalledWith({ token: mockTokens[0], amount: '10' });
  });

  it('should calculate correct total price', () => {
    const TestComponent = () => {
      const [crypto, setCrypto] = useState<CryptoInputProps['value']>();

      return (
        <CryptoInput
          tokenList={mockTokens}
          value={crypto}
          onChange={setCrypto}
          balance={{ amount: '100', unitPrice: '100' }}
        />
      );
    };

    const { baseElement } = render(<TestComponent />);

    // set token amount to 10
    fireEvent.change(baseElement.querySelector('.ant-input-number-input') as Element, {
      target: { value: '10' },
    });

    expect(baseElement.querySelector('.total-price')?.textContent).toBe('1000');
    expect(baseElement.querySelector('.token-balance')?.textContent).includes('100');

    // change token amount to max
    fireEvent.click(baseElement.querySelector('.max-button') as Element);

    expect(baseElement.querySelector('.ant-input-number-input')?.getAttribute('value')).toBe('100');
    expect(baseElement.querySelector('.total-price')?.textContent).toBe('10000');

    // set token amount to null
    fireEvent.change(baseElement.querySelector('.ant-input-number-input') as Element, {
      target: { value: null },
    });

    expect(baseElement.querySelector('.total-price')?.textContent).toBe('-');
  });
});
