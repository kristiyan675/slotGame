import { SlotConfig, SlotResult } from "../interfaces/interface";

export class SlotGame {
  private config: SlotConfig;

  constructor(config: SlotConfig) {
    this.config = config;
  }

  public spin(): void {
    const { reels } = this.config;
    const numRows = 3;
    const numReels = reels.length;

    // Array to store symbols for each row on each reel
    const resultSpin: number[][] = [];
    const resultReelsPositions: number[][] = [];
    let winLine: number[] = [];

    // Array to store symbols for each row on each reel
    const gameResult: SlotResult = {
      reelsPositions: [],
      symbolsOnScreen: [],
      linesPayout: [],
    };

    // Generate random positions for each reel
    for (let reelIndex = 0; reelIndex < numReels; reelIndex++) {
      const currentReel = reels[reelIndex];
      const reelLength = currentReel.length;
      const randomPosition = Math.floor(Math.random() * reelLength);
      //   console.log(randomPosition);
      // Array to store symbols for each row on this reel
      const reelSymbols: number[] = [];
      const reelPositions: number[] = [];

      // Get symbols for all three rows on this reel
      for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
        // Calculate index for current row
        let symbolIndex = (randomPosition + rowIndex) % reelLength;
        let currenSymbol = currentReel[symbolIndex];

        // console.log(symbolIndex, symbol);
        // Add symbol to the current row
        reelPositions.push(symbolIndex);
        reelSymbols.push(currenSymbol);
      }

      // Add symbols and positions for this reel to the result
      resultReelsPositions.push(reelPositions);
      resultSpin.push(reelSymbols);
    }

    // console.log("Generated reels for current spin: ");
    // console.log(resultSpin);

    gameResult.symbolsOnScreen = resultSpin;
    gameResult.reelsPositions = resultReelsPositions;

    checkForWin(resultSpin, this.config);

    function checkForWin(result: number[][] = [], config: SlotConfig) {
      const { lines } = config;
      // Iterate through each winning line
      // console.log(result);

      lines.forEach(function (line, i) {
        // Need more time to make it more abstract without hardcoded values
        const [
          symbolIndex1,
          symbolIndex2,
          symbolIndex3,
          symbolIndex4,
          symbolIndex5,
        ] = line;

        for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
          // Check if symbols on this row across all reels match the winning line
          // Need more time to make it more abstract without hardcoded values
          if (
            result[0][rowIndex] === symbolIndex1 &&
            result[1][rowIndex] === symbolIndex2 &&
            result[2][rowIndex] === symbolIndex3 &&
            result[3][rowIndex] === symbolIndex4 &&
            result[4][rowIndex] === symbolIndex5
          ) {
            // Amount per winnning line
            // Line 1: 0
            // Line 2: 80
            // Line 3: 160
            // Line 4: 20
            // Line 5: 100
            const winningsAmount = {
              0: 0,
              1: 80,
              2: 160,
              3: 20,
              4: 100,
            };

            // Additional logic may be needed for matching more symbols per reel
            // Need more time to make more abstract
            // Payout calculation logic
            winLine = [
              result[0][rowIndex],
              result[1][rowIndex],
              result[2][rowIndex],
              result[3][rowIndex],
              result[4][rowIndex],
            ];
            gameResult.linesPayout.push(winningsAmount[i]);
          }
        }
      });
    }
    console.log(gameResult);
  }
}
