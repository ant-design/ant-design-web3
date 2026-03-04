import { useEffect, useRef } from 'react';

/**
 * 将值始终同步到 ref 中，避免闭包陈旧问题。
 * 适用于回调函数和 effect 中需要读取最新值、但又不想将其加入依赖数组的场景。
 *
 * 使用 useEffect 同步 ref，兼容 React 并发模式（避免 render 阶段直接写 ref 导致中间状态泄露）。
 */
export function useCallbackRef<T>(value: T): React.MutableRefObject<T> {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = value;
  });
  return ref;
}
