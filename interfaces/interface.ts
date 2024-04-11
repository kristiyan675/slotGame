// SlotConfig.ts
export interface SlotConfig {
  reelsCount: number;
  rowsCount: number;
  symbols: { [key: number]: number[] };
  lines: number[][];
  reels: number[][];
}

export interface SlotResult {
  reelsPositions: number[][];
  symbolsOnScreen: number[][];
  linesPayout: number[];
}
