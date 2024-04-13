/// <reference types="haxball-headless-browser" />
import { FatherClass } from "./father-class.js";
import { idioms } from "./main.js";
export declare class Storyteller extends FatherClass {
    private GoalMessages;
    private OwnGoalMessages;
    private GoldenGoalMessages;
    private indice;
    constructor(publicRoom: RoomObject, idiom: idioms);
    ChooseIdiom(idiom: idioms): void;
    SendMessage(message: string, id?: number): Promise<void>;
    SendMessageGoal(owngoal: boolean): Promise<void>;
    SendGoldenGoalMessage(): Promise<void>;
}
