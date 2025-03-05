import { render } from '@testing-library/react';
import { Grid } from 'antd';
import { describe, expect, it, vi } from 'vitest';

import useMode from './useMode';

describe('useMode', () => {
  it('mode = simple & md = false', async () => {
    vi.spyOn(Grid, 'useBreakpoint').mockReturnValue({
      md: false,
    });
    const App = () => {
      const { isSimple } = useMode('simple');
      return <div>{`${isSimple}`}</div>;
    };
    const { baseElement } = render(<App />);

    expect(baseElement.querySelector('div')?.textContent).toBe('true');
  });

  it('mode = simple & md = true', async () => {
    vi.spyOn(Grid, 'useBreakpoint').mockReturnValue({
      md: true,
    });
    const App = () => {
      const { isSimple } = useMode('simple');
      return <div>{`${isSimple}`}</div>;
    };
    const { baseElement } = render(<App />);

    expect(baseElement.querySelector('div')?.textContent).toBe('true');
  });

  it('mode = normal & md = false', async () => {
    vi.spyOn(Grid, 'useBreakpoint').mockReturnValue({
      md: false,
    });
    const App = () => {
      const { isSimple } = useMode('normal');
      return <div>{`${isSimple}`}</div>;
    };
    const { baseElement } = render(<App />);

    expect(baseElement.querySelector('div')?.textContent).toBe('false');
  });

  it('mode = normal & md = true', async () => {
    vi.spyOn(Grid, 'useBreakpoint').mockReturnValue({
      md: true,
    });
    const App = () => {
      const { isSimple } = useMode('normal');
      return <div>{`${isSimple}`}</div>;
    };
    const { baseElement } = render(<App />);

    expect(baseElement.querySelector('div')?.textContent).toBe('false');
  });

  it('mode = auto & md = false', async () => {
    vi.spyOn(Grid, 'useBreakpoint').mockReturnValue({
      md: false,
    });
    const App = () => {
      const { isSimple } = useMode('auto');
      return <div>{`${isSimple}`}</div>;
    };
    const { baseElement } = render(<App />);

    expect(baseElement.querySelector('div')?.textContent).toBe('true');
  });

  it('mode = auto & md = true', async () => {
    vi.spyOn(Grid, 'useBreakpoint').mockReturnValue({
      md: true,
    });
    const App = () => {
      const { isSimple } = useMode('auto');
      return <div>{`${isSimple}`}</div>;
    };
    const { baseElement } = render(<App />);

    expect(baseElement.querySelector('div')?.textContent).toBe('false');
  });

  it('mode = undefined & md = false', async () => {
    vi.spyOn(Grid, 'useBreakpoint').mockReturnValue({
      md: false,
    });
    const App = () => {
      const { isSimple } = useMode();
      return <div>{`${isSimple}`}</div>;
    };
    const { baseElement } = render(<App />);

    expect(baseElement.querySelector('div')?.textContent).toBe('true');
  });

  it('mode = undefined & md = true', async () => {
    vi.spyOn(Grid, 'useBreakpoint').mockReturnValue({
      md: true,
    });
    const App = () => {
      const { isSimple } = useMode();
      return <div>{`${isSimple}`}</div>;
    };
    const { baseElement } = render(<App />);

    expect(baseElement.querySelector('div')?.textContent).toBe('false');
  });
});
