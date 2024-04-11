"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotGame = void 0;
var SlotGame = /** @class */ (function () {
    function SlotGame(config) {
        this.config = config;
    }
    SlotGame.prototype.spin = function () {
        var reels = this.config.reels;
        var numRows = 3;
        var numReels = reels.length;
        // Array to store symbols for each row on each reel
        var resultSpin = [];
        var resultReelsPositions = [];
        var winLine = [];
        // Array to store symbols for each row on each reel
        var gameResult = {
            reelsPositions: [],
            symbolsOnScreen: [],
            linesPayout: [],
        };
        // Generate random positions for each reel
        for (var reelIndex = 0; reelIndex < numReels; reelIndex++) {
            var currentReel = reels[reelIndex];
            var reelLength = currentReel.length;
            var randomPosition = Math.floor(Math.random() * reelLength);
            //   console.log(randomPosition);
            // Array to store symbols for each row on this reel
            var reelSymbols = [];
            var reelPositions = [];
            // Get symbols for all three rows on this reel
            for (var rowIndex = 0; rowIndex < numRows; rowIndex++) {
                // Calculate index for current row
                var symbolIndex = (randomPosition + rowIndex) % reelLength;
                var currenSymbol = currentReel[symbolIndex];
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
        function checkForWin(result, config) {
            if (result === void 0) { result = []; }
            var lines = config.lines;
            // Iterate through each winning line
            // console.log(result);
            lines.forEach(function (line, i) {
                // Need more time to make it more abstract without hardcoded values
                var symbolIndex1 = line[0], symbolIndex2 = line[1], symbolIndex3 = line[2], symbolIndex4 = line[3], symbolIndex5 = line[4];
                for (var rowIndex = 0; rowIndex < numRows; rowIndex++) {
                    // Check if symbols on this row across all reels match the winning line
                    // Need more time to make it more abstract without hardcoded values
                    if (result[0][rowIndex] === symbolIndex1 &&
                        result[1][rowIndex] === symbolIndex2 &&
                        result[2][rowIndex] === symbolIndex3 &&
                        result[3][rowIndex] === symbolIndex4 &&
                        result[4][rowIndex] === symbolIndex5) {
                        // Amount per winnning line
                        // Line 1: 0
                        // Line 2: 80
                        // Line 3: 160
                        // Line 4: 20
                        // Line 5: 100
                        var winningsAmount = {
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
    };
    return SlotGame;
}());
exports.SlotGame = SlotGame;
