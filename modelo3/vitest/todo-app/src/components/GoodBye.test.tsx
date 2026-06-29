// src/components/Hello.test.tsx
import { describe, it, expect } from 'vitest';
import { GoodBye } from './GoodBye';

describe('Good Bye', () => {
  // El test mínimo: el componente existe y es importable.
  it('debería estar definido', () => {
    expect(GoodBye).toBeDefined();
  });
});