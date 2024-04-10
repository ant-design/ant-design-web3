import { Web3ConfigProvider } from '@ant-design/web3-common';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Address } from '..';

describe('Address addressPrefix', () => {
  it('could be set to false', () => {
    const { baseElement } = render(
      <Address addressPrefix={false} address="21CDf0974d53a6e96eF05d7B324a9803735fFd3B" />,
    );
    expect(baseElement.querySelector('.ant-web3-address')?.textContent).toBe(
      '21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
    );
  });

  it('could be set to custom prefix', () => {
    const { baseElement } = render(
      <Address addressPrefix="??" address="21CDf0974d53a6e96eF05d7B324a9803735fFd3B" />,
    );
    expect(baseElement.querySelector('.ant-web3-address')?.textContent).toBe(
      '??21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
    );
  });

  it('default prefix is 0x', () => {
    const { baseElement } = render(
      <Address address="21CDf0974d53a6e96eF05d7B324a9803735fFd3B" tooltip={false} />,
    );
    expect(baseElement.querySelector('.ant-web3-address')?.textContent).toBe(
      '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
    );
  });

  it('could be set at Web3ConfigProvider', () => {
    const { baseElement } = render(
      <Web3ConfigProvider addressPrefix={false}>
        <Address address="21CDf0974d53a6e96eF05d7B324a9803735fFd3B" tooltip={false} />
      </Web3ConfigProvider>,
    );

    expect(baseElement.querySelector('.ant-web3-address')?.textContent).toBe(
      '21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
    );
  });

  it('could be set at Web3ConfigProvider with custom prefix', () => {
    const { baseElement } = render(
      <Web3ConfigProvider addressPrefix="??">
        <Address address="21CDf0974d53a6e96eF05d7B324a9803735fFd3B" tooltip={false} />
      </Web3ConfigProvider>,
    );

    expect(baseElement.querySelector('.ant-web3-address')?.textContent).toBe(
      '??21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
    );
  });

  it('props is first', () => {
    const { baseElement } = render(
      <Web3ConfigProvider addressPrefix="??">
        <Address addressPrefix={false} address="21CDf0974d53a6e96eF05d7B324a9803735fFd3B" />
      </Web3ConfigProvider>,
    );

    expect(baseElement.querySelector('.ant-web3-address')?.textContent).toBe(
      '21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
    );
  });
});
