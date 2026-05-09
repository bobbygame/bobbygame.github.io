import { layouts } from './generated';
import type { Layout } from './types';

export function loadLayout(name: string): Promise<Layout> {
  const layout = layouts[name];
  if (!layout) throw new Error(`Layout not found: ${name}`);
  return Promise.resolve(structuredClone(layout));
}
