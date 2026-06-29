// src/types.ts
export interface Todo {
  id: string;
  text: string;
  titulo: string;
  completed: boolean;
}

export type Filter = 'all' | 'active' | 'completed';

export interface User {
  id: string;
  name: string;
}