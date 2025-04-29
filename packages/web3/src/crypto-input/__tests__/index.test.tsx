import React, { useState } from 'react';
import { ETH, USDC, USDT } from '@ant-design/web3-assets/tokens';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import type { CryptoInputProps } from '..';
import { CryptoInput } from '..';

// Mock tokens
const mockTokens = [ETH, USDT];

describe('CryptoInput component', () => {
  it('should render the component with placeholder text', () => {
    const { baseElement } = render(<CryptoInput options={mockTokens} />);

    expect(baseElement.querySelector('.ant-input-number-input')?.getAttribute('placeholder')).toBe(
      'Please enter amount',
    );
  });

  it('should display correct header', () => {
    // no header
    const { baseElement, rerender } = render(<CryptoInput options={mockTokens} />);

    expect(baseElement.querySelector('.web3-crypto-input-wrapper')?.children?.length).toBe(2);
    expect(baseElement.querySelector('.web3-crypto-input-header')).toBeNull();

    // custom header
    rerender(
      <CryptoInput
        options={mockTokens}
        header={<div className="custom-header">Custom header</div>}
      />,
    );

    expect(baseElement.querySelector('.web3-crypto-input-wrapper')?.children?.length).toBe(3);

    const headerEle = baseElement.querySelector('.web3-crypto-input-header');

    expect(headerEle).not.toBeNull();
    expect(headerEle!.textContent).toBe('Custom header');
  });

  it('should display correct footer', () => {
    // close footer
    const { baseElement, rerender } = render(<CryptoInput options={mockTokens} footer={false} />);

    expect(baseElement.querySelector('.web3-crypto-input-wrapper')?.children?.length).toBe(1);

    // custom footer
    rerender(
      <CryptoInput
        options={mockTokens}
        footer={<div className="custom-footer">Custom footer</div>}
      />,
    );

    expect(baseElement.querySelector('.web3-crypto-input-wrapper')?.children?.length).toBe(2);
    expect(baseElement.querySelector('.custom-footer')).not.toBeNull();
    expect(baseElement.querySelector('.custom-footer')?.textContent).toBe('Custom footer');

    // default footer
    rerender(<CryptoInput options={mockTokens} />);

    expect(baseElement.querySelector('.web3-crypto-input-footer')).not.toBeNull();
  });

  it('should display the token list when clicked', () => {
    const { baseElement } = render(<CryptoInput options={mockTokens} />);

    fireEvent.mouseDown(baseElement.querySelector('.ant-select-selector') as Element);

    const selectOptions = baseElement.querySelectorAll('.ant-select-item');

    expect(selectOptions.length).toBe(2);

    expect(selectOptions[0].textContent).includes('Ethereum');
    expect(selectOptions[1].textContent).includes('Tether USD');
  });

  it('should call onChange with selected token and amount input', () => {
    const TestComponent = (props: CryptoInputProps) => {
      const [crypto, setCrypto] = useState<CryptoInputProps['value']>({
        inputString: '10',
        amount: 0n,
        token: undefined,
      });

      return (
        <CryptoInput
          options={mockTokens}
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

    fireEvent.change(baseElement.querySelector('.ant-input-number-input') as Element, {
      target: { value: '' },
    });

    expect(handleChange).toHaveBeenCalledWith({});

    fireEvent.change(baseElement.querySelector('.ant-input-number-input') as Element, {
      target: { value: '10' },
    });

    expect(handleChange).toHaveBeenCalledWith({ inputString: '10' });

    fireEvent.mouseDown(baseElement.querySelector('.ant-select-selector') as Element);

    const selectOptions = baseElement.querySelectorAll('.ant-select-item');

    fireEvent.click(selectOptions[0]);

    expect(handleChange).toHaveBeenCalledWith({
      token: mockTokens[0],
      amount: 10000000000000000000n,
      inputString: '10',
    });
  });

  it('should correct handle token decimals', () => {
    const TestComponent = (props: CryptoInputProps) => {
      const [crypto, setCrypto] = useState<CryptoInputProps['value']>();

      return (
        <CryptoInput
          options={mockTokens}
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

    const inputEle = baseElement.querySelector('.ant-input-number-input') as Element;

    /**
     * check token amount value
     * first input some value and the input element should display the same value
     * then check onChange callback is called with correct amount
     * then blur the input element, when input value decimals is over token decimals, it should cut correctly
     */
    function checkValue(orginInputValue: string, expectInputValue: string, expectAmount: bigint) {
      fireEvent.change(inputEle, {
        target: { value: orginInputValue },
      });

      expect(inputEle.getAttribute('value')).toBe(orginInputValue);

      expect(handleChange).toHaveBeenCalledWith({
        token: mockTokens[0],
        amount: expectAmount,
        inputString: expectInputValue,
      });

      fireEvent.blur(inputEle);

      expect(inputEle.getAttribute('value')).toBe(expectInputValue);
    }

    // smaller than token decimals
    checkValue('0.012345678', '0.012345678', 12345678000000000n);

    // equal to token decimals
    checkValue('0.012345678901234567', '0.012345678901234567', 12345678901234567n);

    // over token decimals and cut correctly
    checkValue('0.01234567890123456789', '0.012345678901234567', 12345678901234567n);
  });

  it('should calculate correct total price', () => {
    const TestComponent = (props: CryptoInputProps) => {
      const [crypto, setCrypto] = useState<CryptoInputProps['value']>({ token: mockTokens[0] });

      return (
        <CryptoInput
          options={mockTokens}
          value={crypto}
          onChange={setCrypto}
          balance={{ amount: 100000000000000000000n, unit: '$', price: 3894.57 }}
          {...props}
        />
      );
    };

    const { baseElement, rerender } = render(<TestComponent />);

    // set token amount to 10
    fireEvent.change(baseElement.querySelector('.ant-input-number-input') as Element, {
      target: { value: '10.012345678' },
    });

    expect(baseElement.querySelector('.web3-crypto-input-total-price')?.textContent).toBe(
      '$ 38993.78110716846',
    );
    expect(baseElement.querySelector('.web3-crypto-input-token-balance')?.textContent).includes(
      '100',
    );

    // change token amount to max
    fireEvent.click(baseElement.querySelector('.web3-crypto-input-max-button') as Element);

    expect(baseElement.querySelector('.ant-input-number-input')?.getAttribute('value')).toBe('100');
    expect(baseElement.querySelector('.web3-crypto-input-total-price')?.textContent).toBe(
      '$ 389457',
    );

    // set token amount to null
    fireEvent.change(baseElement.querySelector('.ant-input-number-input') as Element, {
      target: { value: null },
    });

    expect(baseElement.querySelector('.web3-crypto-input-total-price')?.textContent).toBe('-');

    // change token balance to undefined
    rerender(<TestComponent balance={undefined} />);
    expect(baseElement.querySelector('.web3-crypto-input-total-price')?.textContent).toBe('-');
  });

  it('do not show max button when set quickSetAmount to false', () => {
    const { baseElement } = render(
      <CryptoInput
        value={{ amount: BigInt(1000), inputString: '10', token: USDC }}
        footer={{ setMaxButton: true }}
      />,
    );
    expect(baseElement.querySelector('web3-crypto-input-max-button')).toBeNull();
  });
});
