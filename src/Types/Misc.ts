import type { ChalkInstance } from 'chalk';

declare global {
  export interface Console {
    other: (message: string) => void;
  }
}

export interface LogData {
  level: string;
  background: ChalkInstance;
  color: ChalkInstance;
}
