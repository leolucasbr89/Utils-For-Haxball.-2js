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
import { MathEntity } from "./math.js";
import { WritingStyles, hexadecimalColors, messages } from "./utils.js";
export class Storyteller extends FatherClass {
    constructor(publicRoom, idiom) {
        super(publicRoom);
        this.GoalMessages = [];
        this.OwnGoalMessages = [];
        this.GoldenGoalMessages = [];
        this.indice = 0;
        this.ChooseIdiom(idiom);
    }
    ChooseIdiom(idiom) {
        if (idiom == "en") {
            let messagesEn = messages.en;
            this.OwnGoalMessages = messagesEn.ownGoalMessages;
            this.GoldenGoalMessages = messagesEn.goldenGoalMessages;
            this.GoalMessages = messagesEn.goalMessages;
        }
        else if (idiom == "es") {
            let messagesEs = messages.es;
            this.OwnGoalMessages = messagesEs.mensajesAutogol;
            this.GoldenGoalMessages = messagesEs.mensajesGolDorado;
            this.GoalMessages = messagesEs.mensajesGol;
        }
        else {
            if (idiom == "pt") {
                let messagesPT = messages.pt;
                this.OwnGoalMessages = messagesPT.mensagensAutogol;
                this.GoldenGoalMessages = messagesPT.mensagensGolDourado;
                this.GoalMessages = messagesPT.mensagensGol;
            }
        }
    }
    SendMessage(message, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.publicRoom.sendAnnouncement(`🎤Story Teller: ${message}`, id, hexadecimalColors.turquoise, WritingStyles.bold);
        });
    }
    SendMessageGoal(owngoal) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!owngoal) {
                this.indice = MathEntity.generateIntegerBetweenMinAndMax(0, this.GoalMessages.length - 1);
                yield this.SendMessage(this.GoalMessages[this.indice]);
            }
            else {
                this.indice = MathEntity.generateIntegerBetweenMinAndMax(0, this.OwnGoalMessages.length - 1);
                yield this.SendMessage(this.OwnGoalMessages[this.indice]);
            }
        });
    }
    SendGoldenGoalMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            this.indice = MathEntity.generateIntegerBetweenMinAndMax(0, this.GoldenGoalMessages.length - 1);
            yield this.SendMessage(this.GoldenGoalMessages[this.indice]);
        });
    }
}
