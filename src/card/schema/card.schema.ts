import { Schema } from 'mongoose';

import { Element } from '../interface/card.interface';

export const CardSchema = new Schema({
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    power: {
        type: Number,
        enum: [1, 2, 3, 4, 5],
        required: true,
    },
    element: {
        type: Number,
        enum: Element,
        required: true,
    }
});