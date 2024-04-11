import { SlotGame } from "./app/SlotGame";
import { slotConfig } from "./config/config";

const slotGame = new SlotGame(slotConfig);
slotGame.spin();
