import { Connector } from '@ant-design/web3';
import { Button } from 'antd';
import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';

describe('Connector', () => {
  it('render children', () => {
    const App = () => (
      <Connector>
        <Button>children</Button>
      </Connector>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('children');
  });

  it('modalProps', () => {
    const App = () => {
      return (
        <Connector modalProps={{ title: 'modal title', open: true }}>
          <Button>children</Button>
        </Connector>
      );
    };
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-connect-modal-title')?.textContent).toBe('modal title');
  });
});
