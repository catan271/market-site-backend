import { Document } from "mongoose";

export enum Element {
    WATER,
    FIRE,
    WOOD,
    EARTH
}

export interface Card extends Document {
    image: string,
    name: string,
    power: number,
    element: Element
}
