declare module '*.svg' {
  import type * as React from 'react';

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}
