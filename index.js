"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SlotGame_1 = require("./app/SlotGame");
var config_1 = require("./config/config");
var slotGame = new SlotGame_1.SlotGame(config_1.slotConfig);
slotGame.spin();
