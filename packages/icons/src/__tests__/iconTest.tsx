import path from 'path';
import { type ComponentType } from 'react';
import { globSync } from 'glob';

export async function getComponents(dir: string): Promise<ComponentType[]> {
  return new Promise(async (resolve) => {
    const files = globSync(path.resolve(__dirname, '..', dir, '*.tsx'));
    const res: ComponentType[] = [];
    for (const file of files) {
      const comp = await import(file);
      const displayNames = Object.keys(comp);
      displayNames.forEach((displayName) => {
        const Icon = comp[displayName];
        res.push(Icon);
      });
    }
    resolve(res);
  });
}
