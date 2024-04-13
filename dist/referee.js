var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { FatherClass } from "./father-class.js";
import { WritingStyles, hexadecimalColors } from "./utils.js";
export class Referee extends FatherClass {
    constructor(publicRoom) {
        super(publicRoom);
    }
    SendMessage(message, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.publicRoom.sendAnnouncement(`Referee: ${message}`, id, hexadecimalColors.yellow, WritingStyles.bold);
        });
    }
    PauseGame(askedforabreak, idiom) {
        return __awaiter(this, void 0, void 0, function* () {
            let agent = askedforabreak !== undefined ? askedforabreak.name : "room";
            if (idiom === "en") {
                yield this.SendMessage(`PÍÍÍÍÍ, Game paused by ${agent}`);
            }
            else if (idiom === "pt") {
                yield this.SendMessage(`PÍÍÍÍÍ, Jogo pausado por ${agent}`);
            }
            else if (idiom === "es") {
                yield this.SendMessage(`PÍÍÍÍÍ, Juego pausado por ${agent}`);
            }
        });
    }
    SendMessageWhenStopGame() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.SendMessage("PÍÍÍÍÍÍÍÍÍÍÍÍ");
        });
    }
}
