/// <reference types="haxball-headless-browser" />
import { FatherClass } from "./father-class.js";
import { idioms } from "./main.js";
export declare class Referee extends FatherClass {
    constructor(publicRoom: RoomObject);
    SendMessage(message: string, id?: number): Promise<void>;
    PauseGame(askedforabreak: PlayerObject | undefined, idiom: idioms): Promise<void>;
    SendMessageWhenStopGame(): Promise<void>;
}
